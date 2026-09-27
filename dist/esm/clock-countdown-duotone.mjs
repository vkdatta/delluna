export const name="clock-countdown-duotone";
export const id="dl_89c7f9acaa7e4edead1e";
export const url=new URL("../icons/clock-countdown-duotone.svg?v=0a4a1d9b50a34c5f76227f77417b8cbc37c65ff4bec72dfab6a85a844bfaafce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
