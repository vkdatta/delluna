export const name="arming_countdown";
export const id="dl_02631b37a2c640c6287a";
export const url=new URL("../icons/arming_countdown.svg?v=6a20eeb54f85b5c95bd058d4a63a36f7ba2a6c9a161cb1642ac6f4db8933740f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
