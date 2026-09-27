export const name="forward_30-fill";
export const id="dl_7cb5938b3d734c26ea05";
export const url=new URL("../icons/forward_30-fill.svg?v=5555fd82666f0c5671bc1776538db1df20cbebb2f7b1ed37653c770a881c9335",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
