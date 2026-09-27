export const name="lucid_3-square-chevron-down";
export const id="dl_18fb09c635b34fa7b125";
export const url=new URL("../icons/lucid_3-square-chevron-down.svg?v=5b5792e24302deac3b086520b902611809b5571ff523790e67df286267580107",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
