export const name="local_florist-fill";
export const id="dl_a3fb6ec32cacb4e53294";
export const url=new URL("../icons/local_florist-fill.svg?v=adad99714822db0d54b85e83eec1afd63120ebc61bea42b471273228ae41c3ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
