export const name="battery-plus-vertical-thin";
export const id="dl_b0c72acd9a264c6ca6c7";
export const url=new URL("../icons/battery-plus-vertical-thin.svg?v=f713b55fed0143a5708339b452846926d40b97af95eee3b4652691345d08a7e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
