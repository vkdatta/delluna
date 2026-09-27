export const name="egg-bold";
export const id="dl_36dbf2ca2d014fb89b4a";
export const url=new URL("../icons/egg-bold.svg?v=b38551f0afd3f66059d4b7c4bf4d8bae20f0e57cb93cbc310668e294ce7a5b4d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
