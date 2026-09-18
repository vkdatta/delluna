export const name="tibia_alt";
export const id="dl_b17a6fd52e9c4ca8b01e";
export const url=new URL("../icons/tibia_alt.svg?v=bd83b54a90539188f6953a256c5728418758dd5627e1b8988946ec5470b52cc3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
