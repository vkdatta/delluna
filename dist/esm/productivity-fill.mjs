export const name="productivity-fill";
export const id="dl_75471893027d651b880d";
export const url=new URL("../icons/productivity-fill.svg?v=748c5640f8641c8920969df69ade4946c474afa66424b1dc52055cdc3f101e37",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
