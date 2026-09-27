export const name="face_4-fill";
export const id="dl_d01a26351c32597532c3";
export const url=new URL("../icons/face_4-fill.svg?v=751d8a8eb4fb3c4c0b034fd0a9075c7a76ce16f9eb8a212b3e95720e145e32eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
