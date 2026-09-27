export const name="nature-fill";
export const id="dl_f2d36d880a6413ea22db";
export const url=new URL("../icons/nature-fill.svg?v=fad41a673a024a0e71d7d655522167d8fe4d64bae87641c5bd94fd1cfbad5d29",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
