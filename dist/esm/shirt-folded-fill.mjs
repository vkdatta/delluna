export const name="shirt-folded-fill";
export const id="dl_525e76753e21e65f959e";
export const url=new URL("../icons/shirt-folded-fill.svg?v=647380e7bdd28bbbf2afb5a55e9e0c3b9adf108a58182744eb2a14f4292ed778",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
