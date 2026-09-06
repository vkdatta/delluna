export const name="engine-fill";
export const id="dl_fa7090198ae84fa5b873";
export const url=new URL("../icons/engine-fill.svg?v=21524d13c475666fdd2cc3ca9c9a7ced0d9ab5cc900df4e4b07a44446b493dd5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
