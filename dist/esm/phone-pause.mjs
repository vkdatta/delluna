export const name="phone-pause";
export const id="dl_e896320415fe4f36ab7a";
export const url=new URL("../icons/phone-pause.svg?v=aaaa5c565f1df699f2c7248496ed368859dfac2a1c6ae00ded071fcf17f600c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
