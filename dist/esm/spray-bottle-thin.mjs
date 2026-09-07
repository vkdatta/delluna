export const name="spray-bottle-thin";
export const id="dl_4d2e2b27586f42c18aef";
export const url=new URL("../icons/S/spray-bottle-thin.svg?v=5c47d5acbbe38f711b57064d4681cd5716a05df21bf08e200de1daf1b093c11f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
