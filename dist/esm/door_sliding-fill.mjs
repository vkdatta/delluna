export const name="door_sliding-fill";
export const id="dl_6c6ba489af3c4449864c";
export const url=new URL("../icons/door_sliding-fill.svg?v=9f859898c0b64b5baae11b07569b73f703c669cebe2d1cec3f16ec3cd81c0e2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
