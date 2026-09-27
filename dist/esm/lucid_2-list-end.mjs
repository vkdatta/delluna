export const name="lucid_2-list-end";
export const id="dl_b6da7a1451a247adaf19";
export const url=new URL("../icons/lucid_2-list-end.svg?v=d6f6f5da6cc8284d1ef6177e3a4eaf40495328b0d11cb6db2b7fc889107aeea5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
