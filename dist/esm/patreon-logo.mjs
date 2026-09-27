export const name="patreon-logo";
export const id="dl_6b068deeca2444dab024";
export const url=new URL("../icons/patreon-logo.svg?v=37cc1704766b8c52f77c956ab8a8000ebaeac6d0d7d7bd03416ee6308ba07ffa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
