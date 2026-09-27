export const name="lucid_3-mop-sparkles";
export const id="dl_f85f787cc94b4be5a75e";
export const url=new URL("../icons/lucid_3-mop-sparkles.svg?v=43f888b45158cb1a0f8f22dfe63c74069d6ba36ccd37c78d599d96fc4bec6b05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
