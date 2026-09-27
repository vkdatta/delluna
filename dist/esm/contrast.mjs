export const name="contrast";
export const id="dl_d9d2fe9ede06ef988b83";
export const url=new URL("../icons/contrast.svg?v=0bb9e726bbb6f257ec5ded5a018d72afab2a1011c6f9169a5f23ed599d8a05e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
