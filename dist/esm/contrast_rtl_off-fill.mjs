export const name="contrast_rtl_off-fill";
export const id="dl_5ed3cbd789e0465abaeb";
export const url=new URL("../icons/contrast_rtl_off-fill.svg?v=b5236fe7c62b69a47c83030d825483ab431d09f18670c9c774fe944083361184",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
