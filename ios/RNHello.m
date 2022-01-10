//
//  RNHello.m
//  food
//
//  Created by Evhenii Hryhoriev on 31.12.2021.
//

// RCTCalendarModule.m
#import "RNHello.h"
#import <React/RCTLog.h>

@implementation RNHello

// To export a module named RCTCalendarModule
RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location)
{
 RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
}

@end
