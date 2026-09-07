export const name="axe-duotone";
export const id="dl_38df57a124724cdcab6b";
export const url=new URL("../icons/axe-duotone.svg?v=e95b2445bfb496afefeec879a50578613f46288febba0e3b4b0adc80ced16e19",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
