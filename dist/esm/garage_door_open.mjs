export const name="garage_door_open";
export const id="dl_af3a51045b7635970e4f";
export const url=new URL("../icons/garage_door_open.svg?v=57424f5181e4d2d02154f357c259290a7e575480db782fe7853de45d99445eec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
