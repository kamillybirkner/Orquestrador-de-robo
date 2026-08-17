require "test_helper"

class Api::HealthControllerTest < ActionDispatch::IntegrationTest
  test "responds with ok status" do
    get api_health_url

    assert_response :success
    assert_equal({ "status" => "ok" }, JSON.parse(response.body))
  end
end
