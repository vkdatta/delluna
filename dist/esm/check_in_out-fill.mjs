export const name="check_in_out-fill";
export const id="dl_3c1dd9f5bb9ff0adee0a";
export const url=new URL("../icons/check_in_out-fill.svg?v=dedf33b3b75dbe7a0d0401e005458bf060514e8a18ead2f60974d2bb9b9f059f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
