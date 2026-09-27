export const name="repeat-thin";
export const id="dl_efbb02f86fdf424f9857";
export const url=new URL("../icons/repeat-thin.svg?v=7d685cf1d759ae93cd8085b69681e02a3482270e919dd902bc6d567d78558e15",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
