export const name="ulna_radius";
export const id="dl_2e636d1dd5b1c49d2d9f";
export const url=new URL("../icons/ulna_radius.svg?v=f7b1b19808c76ebddaf2fa700751498acfd6aa1cba7f5ab6fb9ad0bba916e5ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
