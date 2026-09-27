export const name="sneaker-thin";
export const id="dl_12611bfac71bb0d21c67";
export const url=new URL("../icons/sneaker-thin.svg?v=41d81867874091b5eed4ab90bc7e4d1c120772cc3e639c2eed3669d4ee9fc00b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
