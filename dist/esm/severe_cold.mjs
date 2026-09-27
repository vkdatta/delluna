export const name="severe_cold";
export const id="dl_46dc411c7adb89bf3c7d";
export const url=new URL("../icons/severe_cold.svg?v=9f468e322f65ffc0ecfbc527eeeb8076dfdd1d4eef56c5b3d2acf0088c8ecc28",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
