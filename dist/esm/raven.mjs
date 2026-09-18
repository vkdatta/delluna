export const name="raven";
export const id="dl_abf5f1c7102045009e6b";
export const url=new URL("../icons/raven.svg?v=10e0d407aca1d1b2d16f32f50d8a6d6d3c3fe6ad6c0687c8a63c58f2b91438f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
