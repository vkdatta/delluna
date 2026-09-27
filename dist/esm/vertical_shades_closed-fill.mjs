export const name="vertical_shades_closed-fill";
export const id="dl_84a79d08a079978df671";
export const url=new URL("../icons/vertical_shades_closed-fill.svg?v=53ad08e049c0e8a87ed030783b9f690fa9ff599bf729df1c9a7a44211cbdf3fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
