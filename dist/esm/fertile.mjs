export const name="fertile";
export const id="dl_5b1f1aa768e7461d91de";
export const url=new URL("../icons/F/fertile.svg?v=e88e92078b05749fa2965eaed1f445f8484571ccebb4f69898b35104c8b9615c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
