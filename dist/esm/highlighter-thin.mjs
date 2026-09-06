export const name="highlighter-thin";
export const id="dl_f91fe8b2f2454e519496";
export const url=new URL("../icons/highlighter-thin.svg?v=e86da278f8305da2a04f0ec45ad630a4753962f76a4b9c061bdfa2300b728f5c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
