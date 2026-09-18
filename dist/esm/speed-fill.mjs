export const name="speed-fill";
export const id="dl_6bdeca336d66466ca03e";
export const url=new URL("../icons/S/speed-fill.svg?v=7681b0137df19b7ca76ee18d547c36425ad12ffe44cdb87b8052a6ce93307b99",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
