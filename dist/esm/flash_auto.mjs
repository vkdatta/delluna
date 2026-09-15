export const name="flash_auto";
export const id="dl_3548d70a849843e88a75";
export const url=new URL("../icons/F/flash_auto.svg?v=b423d6ca3058ea857b9323e3f4486848876e0687142ce0f043672b302898d828",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
