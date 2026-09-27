export const name="seal-warning-duotone";
export const id="dl_e8f35e3ead00fd2ac363";
export const url=new URL("../icons/seal-warning-duotone.svg?v=383b160b32265aabedf06a105007542075a27cc40480bbecaa34f8cf01727ac5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
