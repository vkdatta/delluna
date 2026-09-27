export const name="lucid_3-shapes";
export const id="dl_8fccafaf263e49379859";
export const url=new URL("../icons/lucid_3-shapes.svg?v=6d53f593ac4c35feea36a383f6ef0b067ec5c23dd26570573b3827a13ccf9d41",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
