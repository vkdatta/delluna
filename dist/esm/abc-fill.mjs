export const name="abc-fill";
export const id="dl_c348806afbf3a3e7d46e";
export const url=new URL("../icons/abc-fill.svg?v=22c4d8d7d7c993cf5551d236389ec37acf0832773e7068b8e77c39a81a605d5c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
