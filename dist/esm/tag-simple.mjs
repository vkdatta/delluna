export const name="tag-simple";
export const id="dl_424e74274fa9233b7466";
export const url=new URL("../icons/tag-simple.svg?v=5ba513edf085a46d2d5182186517fbca5ae39146d05ca8a1d1d5bfaad14b16b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
