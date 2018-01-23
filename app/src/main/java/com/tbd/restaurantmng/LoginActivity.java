package com.tbd.restaurantmng;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.Button;
import android.view.View;

public class LoginActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        // login functionality
        Button loginB = (Button) findViewById(R.id.loginB);

        loginB.setOnClickListener(
                new Button.OnClickListener() {
                     public void onClick(View v) {

                     }
                }
        );

        // create account functionality
        Button createAccB = (Button) findViewById(R.id.createAccB);

        createAccB.setOnClickListener(
                new Button.OnClickListener() {
                    public void onClick(View v) {

                    }
                }
        );
    }
}
