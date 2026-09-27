export const name="smiley-bold";
export const id="dl_b991facc01cfb62040df";
export const url=new URL("../icons/smiley-bold.svg?v=23f57ddf175462374cd777acdede164a3b771f489a93257bd8ac7f510971d29b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
