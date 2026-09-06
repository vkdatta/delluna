export const name="rabbit-thin";
export const id="dl_7791ba92d72c48c4ada2";
export const url=new URL("../icons/rabbit-thin.svg?v=e2445324377d4ad1ef820b7e0e59f270f42a473ab0884de6d59ac44596594b09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
