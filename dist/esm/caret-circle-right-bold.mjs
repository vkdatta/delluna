export const name="caret-circle-right-bold";
export const id="dl_28a2b55e8e82445a9313";
export const url=new URL("../icons/caret-circle-right-bold.svg?v=f03ee1a91d55aa97fcdc096fba087652639a2e90a577cfd22ae34eb0884302e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
