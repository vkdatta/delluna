export const name="gender-intersex-thin";
export const id="dl_6fd0aa68d7134da8aa16";
export const url=new URL("../icons/gender-intersex-thin.svg?v=50ce1e3f537da7567d789c07eba10b79936e52fd125d69050d58d5873de5f7e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
