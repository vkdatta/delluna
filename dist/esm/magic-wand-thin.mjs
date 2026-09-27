export const name="magic-wand-thin";
export const id="dl_9888fb1952b64889844a";
export const url=new URL("../icons/magic-wand-thin.svg?v=03d0e2283a6dd6a04c62b429c70c72578f2a031ec943ec5dc2174c4162e6c46e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
