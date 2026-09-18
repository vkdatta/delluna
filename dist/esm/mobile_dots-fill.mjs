export const name="mobile_dots-fill";
export const id="dl_c3606589184a4afb8411";
export const url=new URL("../icons/M/mobile_dots-fill.svg?v=03650e72176974f5c552c4a69481fc9e40e66c4a11c5f5ef3cfb22e42e607dac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
