export const name="circuitry-thin";
export const id="dl_a5f026dda3ec4a34975d";
export const url=new URL("../icons/circuitry-thin.svg?v=233073b649565acc579cdbd98438066fa7e4cd068dd6ba04eec58674f1f58f36",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
