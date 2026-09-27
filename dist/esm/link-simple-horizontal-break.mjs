export const name="link-simple-horizontal-break";
export const id="dl_6884bb6b9ecb431a9856";
export const url=new URL("../icons/link-simple-horizontal-break.svg?v=975e82a95404500402ff125ae4ca791505d96a9ddaee5fc6225dca72f7c24f01",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
