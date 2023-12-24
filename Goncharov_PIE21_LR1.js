alert("Программа 'калькулятор' позволяет совершать пять арифметических действий (сложение, вычитание,\
       умножение, деление, остаток от целочислененого деления) над любыми двумя числами. \
       В каждой арифметической операции первое введённое число является первым компонентом, \
       второе число - вторым коомпонентом. По умолчанию оба числа равны нулю. Затем нужно нажать кнопку, \
	   подпись и обозначение на которой соответствуют надлежащему действию. \
       После этого ответ появится вместе с названием выполненной операции в всплывающем окне. \
	   Если вместо числа в этой строке появится надпись 'NаN' (не число), то это означает, что либо \
       входные данные не являются числами, либо задана недопустимая математическая операция.");
var first_number = prompt("Введите первое число:", "0");   // Первое число
var second_number = prompt("Введите второе число:", "0");   // Второе число

var result_addition = Number(first_number) + Number(second_number);   // Результат сложения
var string_result_addition = "Результат сложения " + first_number + " и " + second_number + ": "
                             + String(result_addition); // Вывод результата сложения

var result_substraction = Number(first_number) - Number(second_number);   // Результат вычитания
var string_result_substraction = "Результат вычитания " + second_number + " от " + first_number + ": "
                                 + String(result_substraction); // Вывод результата вычитания
						  
var result_multiplication = Number(first_number) * Number(second_number);   // Результат умножения
var string_result_multiplication = "Результат умножения " + first_number + " на " + second_number + ": "
                                   + String(result_multiplication); // Вывод результата умножения
							
var result_division = Number(first_number) / Number(second_number);   // Результат деления
var string_result_division = "Результат деления " + first_number + " на " + second_number + ": " +
                             String(result_division); // Вывод результата деления
					  
var result_remsinder_of_integer_division = Number(first_number) % Number(second_number);   
										   // Результат вычисления остатка от целочисленного деления
var string_result_remsinder_of_integer_division = "Результат вычисления остатка от целочисленного деления " + 
                                                  first_number + " на " + Number(second_number) + ": " +
                                                  String(result_remsinder_of_integer_division);
												  // Вывод результата вычисления остатка от целочисленного деления
												  
	  