import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsStrongPassword, MinLength } from 'class-validator';
import { AchievementResponse } from './Achievement';

export class UserResponse {
    @ApiProperty({ example: 'johndoe@nobody.com' })
    email: string;

    @ApiProperty({ example: 'strongPassword1' })
    password: string;

    @ApiProperty({ example: 'John Doe' })
    name: string;

    @ApiProperty({ example: 0 })
    points: number;

    @ApiProperty({ example: 1 })
    level: number;
}

export class UserAchievementResponse {
    @ApiProperty({ example: AchievementResponse })
    achievement: AchievementResponse;
}

export class UserLessonLinkReponse {
    @ApiProperty({ example: 1 })
    userId: number;

    @ApiProperty({ example: 2 })
    lessonLinkId: number;

    @ApiProperty({ example: new Date() })
    completedAt: Date;
}
