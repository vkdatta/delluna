export const name="plug-thin";
export const id="dl_af88995218184b6cacca";
export const url=new URL("../icons/plug-thin.svg?v=8c421dcdc78bb6f3b4d6823b91bd4a54a053164c58d7817367a80bd46023cf20",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
