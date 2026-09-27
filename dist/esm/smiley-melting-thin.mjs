export const name="smiley-melting-thin";
export const id="dl_ffebe0f6670df9a8111f";
export const url=new URL("../icons/smiley-melting-thin.svg?v=7c1673920306640b2d06d3e5b1a7f2a2bf828331ad4f24ad771bc4a03a17adee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
