export const name="battery-vertical-high-duotone";
export const id="dl_e57ef3c6e12040338720";
export const url=new URL("../icons/battery-vertical-high-duotone.svg?v=7cd068cc3cb34a73431fbddbad114825a807550184b683da674e3c61fafff780",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
