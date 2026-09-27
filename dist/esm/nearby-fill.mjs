export const name="nearby-fill";
export const id="dl_2b4dd61ba72b023e64c2";
export const url=new URL("../icons/nearby-fill.svg?v=2983922540ce0bc9f51e847af03848e57e03dd593fc29bed013af4fde7c438be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
