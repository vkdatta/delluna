export const name="cloud-moon-thin";
export const id="dl_2cf8494d495a4936b74d";
export const url=new URL("../icons/cloud-moon-thin.svg?v=64e044fb94d48e967e53363cef26352e31e4b166f1c90a4dc866520142931089",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
