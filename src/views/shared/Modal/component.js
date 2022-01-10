import React from 'react';
import { Alert, Text, Modal as NativeModal } from 'react-native';

import * as S from './styled';

const Modal = ({ visible, setVisible }) => {
	return (
		<S.View>
			<NativeModal
				animationType="slide"
				transparent={true}
				visible={visible}
				onRequestClose={() => {
					Alert.alert('Modal has been closed.');
					setVisible(!visible);
				}}
			>
				<S.View>
					<S.Overlay>
						<Text>Hello World!</Text>
						<S.Button
							onPress={() => setVisible(!visible)}
						>
							<S.Text>Hide Modal</S.Text>
						</S.Button>
					</S.Overlay>
				</S.View>
			</NativeModal>
		</S.View>
	);
};

export default Modal;
