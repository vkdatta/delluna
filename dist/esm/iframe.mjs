export const name="iframe";
export const id="dl_04166181f032b0e7ebe0";
export const url=new URL("../icons/iframe.svg?v=a966af328209e36afb2df38186ee3e61d0d4a7b7b7813bdf24eecc331156ed7e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
