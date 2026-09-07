export const name="smiley-sad";
export const id="dl_74b78ce0d50d43b8810d";
export const url=new URL("../icons/S/smiley-sad.svg?v=036ae7c622dd76cb46e1213dfb479213cad6494e5d571bdc57cbff3a8c7c54a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
