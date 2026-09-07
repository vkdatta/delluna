export const name="tilde";
export const id="dl_6892a52226f1443494e6";
export const url=new URL("../icons/T/tilde.svg?v=a28466f2399c4e79143f65c82edaecdbf9ac8992cfee8608409e2d0d601c4f08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
