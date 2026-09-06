export const name="hard-hat-thin";
export const id="dl_e213fccc568a416c829f";
export const url=new URL("../icons/hard-hat-thin.svg?v=8e9bc5c9d8c5fdec0275232a9652cac08237ad3042f193dacd13d5bac53606a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
