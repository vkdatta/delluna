export const name="sunglasses-thin";
export const id="dl_c50dcde4a18d039f46d5";
export const url=new URL("../icons/sunglasses-thin.svg?v=53c6e7c5d3c7175b67caaa28c82eb3cefd1e494846285c3480b6b9f821a78348",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
