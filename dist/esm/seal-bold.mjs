export const name="seal-bold";
export const id="dl_8315b1df42230abf7478";
export const url=new URL("../icons/seal-bold.svg?v=0fe51e351a8340c3ca4f2865215215c4fb9fd513760a7f4910defef2ed80b372",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
