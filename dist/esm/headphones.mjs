export const name="headphones";
export const id="dl_0db5ffdf11e840efa470";
export const url=new URL("../icons/headphones.svg?v=992d04ff6759f1f12d40259298a92589c18556bf5b2ea6f82bc23e74d9c48185",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
