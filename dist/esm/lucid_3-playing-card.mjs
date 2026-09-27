export const name="lucid_3-playing-card";
export const id="dl_8542480e2d584782bbd5";
export const url=new URL("../icons/lucid_3-playing-card.svg?v=e2b9623ec4d102fd41a297d689b08ed0e0e59ea3ffb932a606e301da4f6d0f30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
