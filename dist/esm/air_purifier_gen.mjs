export const name="air_purifier_gen";
export const id="dl_ee49fa8f99bfe055f788";
export const url=new URL("../icons/air_purifier_gen.svg?v=97291a1aceef2a52253c9caf212778e1c5757c06cac913d9ebb8b79270f9f708",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
