export const name="lucid_1-a-large-small";
export const id="dl_d7df4a25e0b74b889a2d";
export const url=new URL("../icons/lucid_1-a-large-small.svg?v=6b8edbd05adb043a8b53963e61cb1b35e15a3cf05eb0059cb282db9670f6b853",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
