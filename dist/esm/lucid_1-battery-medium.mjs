export const name="lucid_1-battery-medium";
export const id="dl_ffdd27b4339244d7b2a2";
export const url=new URL("../icons/lucid_1-battery-medium.svg?v=8fd7205d77eeb1811937a7cf6080917c4cb10b987d456b64885dba1a8e9afcb9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
