export const name="heart_smile";
export const id="dl_25365a863ebdce712adb";
export const url=new URL("../icons/heart_smile.svg?v=862d4e9d758fbdce118e0350f5e1abbdbe2fe8f26b8495461bd8bc9d98adc673",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
