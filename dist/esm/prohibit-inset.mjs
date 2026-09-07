export const name="prohibit-inset";
export const id="dl_e1dbaab0fadd49649d86";
export const url=new URL("../icons/prohibit-inset.svg?v=65a0a18a36a1965df56576577e4c28bafca501bd7c6a9f28b454394478dd7e88",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
