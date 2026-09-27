export const name="box-arrow-down";
export const id="dl_b17d2dd5f4114a618cb9";
export const url=new URL("../icons/box-arrow-down.svg?v=477b0f3d5e98e84838fb8a2f647b27d2900bc4c6be22a5cfabf7e328c6196c4e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
