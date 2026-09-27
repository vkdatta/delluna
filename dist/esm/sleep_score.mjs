export const name="sleep_score";
export const id="dl_cc713082fd2a43e36c1d";
export const url=new URL("../icons/sleep_score.svg?v=fac0f0ba42dcefb8fc1f0ca9613f80bcbee148e44fd35991862de3f1cc70374a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
