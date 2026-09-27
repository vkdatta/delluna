export const name="rug-duotone";
export const id="dl_bb07e13596794ba5b213";
export const url=new URL("../icons/rug-duotone.svg?v=729bc387a94a186925c6facd4d486e33c886aeacb592c822cf47681520e0d4f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
