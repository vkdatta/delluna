export const name="foggy";
export const id="dl_1991d1ee31dec7540be0";
export const url=new URL("../icons/foggy.svg?v=6d5b9b25f2f7096314ef08b0c30f72226c6a29a37207a3c8bff0d43ef3fecbbc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
