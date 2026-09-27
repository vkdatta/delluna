export const name="arrow_outward-fill";
export const id="dl_983083e54819c296eb55";
export const url=new URL("../icons/arrow_outward-fill.svg?v=116af2dfd15f0f177e62573f633d417315c74003fd914b213a70d5dda81cb0d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
