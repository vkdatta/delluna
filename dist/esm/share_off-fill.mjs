export const name="share_off-fill";
export const id="dl_87a4f232016cca4bda41";
export const url=new URL("../icons/share_off-fill.svg?v=8252d994f1ae926d62f6b45a05907154c58bff4605ac00101fc3aab159d91f46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
