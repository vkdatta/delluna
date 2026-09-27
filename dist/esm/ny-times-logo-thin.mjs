export const name="ny-times-logo-thin";
export const id="dl_90f39f5cca2d4d0d8bea";
export const url=new URL("../icons/ny-times-logo-thin.svg?v=4b347fdfdbd16e100cbc6d04060ac43bcb03216406d057593d4c17c304d153d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
