export const name="cast_connected";
export const id="dl_e73c91478ea0daa50e34";
export const url=new URL("../icons/cast_connected.svg?v=6b6ceeac64ae38607ecbff91f08687d0344146914b27e0aa534dc0665ea9135a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
