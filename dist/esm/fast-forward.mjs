export const name="fast-forward";
export const id="dl_93eebfb1a432477b8c25";
export const url=new URL("../icons/fast-forward.svg?v=1623de2cb3e5a0ac84766962f217d839e238a16fbe8976af11df0c204b4bd542",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
