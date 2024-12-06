import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export const ResultCard = ({ result }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Calculation Results</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <p className="text-lg">
            Carbon Emissions: {result.data.attributes.carbon_kg} kg CO2e
          </p>
          <p className="text-sm text-gray-600">
            Activity Type: {result.data.attributes.activity_type}
          </p>
          {result.data.attributes.country && (
            <p className="text-sm text-gray-600">
              Country: {result.data.attributes.country.toUpperCase()}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
