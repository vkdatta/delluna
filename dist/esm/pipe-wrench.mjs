export const name="pipe-wrench";
export const id="dl_028b83f0a2404f8fbe96";
export const url=new URL("../icons/pipe-wrench.svg?v=bf0c43e9bf0b00be6ccbb7d57a5d1ac39f0782bfb98100cd7a7a0bb6bf3561af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
