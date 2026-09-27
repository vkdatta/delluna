export const name="briefcase-metal-light";
export const id="dl_ae3076e92553443bbb33";
export const url=new URL("../icons/briefcase-metal-light.svg?v=a3419e6433becd842e730b10622e290059cac007c8bb5b8543544349a15a5475",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
