export const name="wb_incandescent";
export const id="dl_90f10cd474934c8b86c8";
export const url=new URL("../icons/W/wb_incandescent.svg?v=1a1a20e337fbe3a0ae563965b55f004d10bb7114a9dd659ccc88968b899b7fc3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
