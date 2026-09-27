export const name="pencil-simple";
export const id="dl_560b33a61a8a441cb8aa";
export const url=new URL("../icons/pencil-simple.svg?v=557395b09ce53b1927118e913ebc418e11c88cf815b6ae302af26767cfb072e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
