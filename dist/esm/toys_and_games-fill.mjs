export const name="toys_and_games-fill";
export const id="dl_be183f1e245eb7befb9d";
export const url=new URL("../icons/toys_and_games-fill.svg?v=26097afc3ace665223a7adb58b4d1c13b0f425da070af896046ccbe5bd0cce80",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
