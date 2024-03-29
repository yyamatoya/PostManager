import 'package:flutter/material.dart';
import 'package:post_app/pages/detail_page.dart';
import 'package:post_app/providers/draft_provider.dart';
import 'package:post_app/providers/post_provider.dart';
import 'package:post_app/providers/user_provider.dart';
import 'package:provider/provider.dart';
import 'pages/login_page.dart';

void main() async {
  // debugPaintSizeEnabled = true;
  runApp(MultiProvider(
    providers: [
      ChangeNotifierProvider(create: (_) => PostProvider()),
      ChangeNotifierProvider(create: (_) => DraftProvider()),
      ChangeNotifierProvider(create: (_) => UserProvider()),
      ChangeNotifierProvider(create: (_) => ReplyProvider()),

    ],
    child: const MyApp(),
  ));
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        debugShowCheckedModeBanner: false,
      title: 'Flutter Demo',
      theme: ThemeData(primarySwatch: Colors.blue, fontFamily: "Noto Sans JP"),
        home: const LoginPage()
    );
  }
}
