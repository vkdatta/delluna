export const name="clover-light";
export const id="dl_bc62fab54ad343718388";
export const url=new URL("../icons/clover-light.svg?v=e2a78dee066a2819a835aa9000fda9ba45db052e62be4298101061280e989fc0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
