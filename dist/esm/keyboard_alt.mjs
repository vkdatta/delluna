export const name="keyboard_alt";
export const id="dl_20e6282a00efb19b0999";
export const url=new URL("../icons/keyboard_alt.svg?v=138adb44d2b9e00886eb50ce705aec89385a3ed4402bb22e1d3a746df633b80e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
