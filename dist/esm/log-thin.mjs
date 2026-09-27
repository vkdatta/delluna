export const name="log-thin";
export const id="dl_e7f6e11f50344580b0c9";
export const url=new URL("../icons/log-thin.svg?v=41cbbc429d8a0a2f3fd44ca0de66239dd40d2fabf1816c28394782a75daa9a33",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
