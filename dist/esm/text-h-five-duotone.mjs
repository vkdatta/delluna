export const name="text-h-five-duotone";
export const id="dl_5429950b7bb2483ba9a4";
export const url=new URL("../icons/T/text-h-five-duotone.svg?v=779bc444a7d60875a314f9d21dedc452a628e780b4a2660211322c891100d670",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
