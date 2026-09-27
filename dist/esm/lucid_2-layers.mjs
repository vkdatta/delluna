export const name="lucid_2-layers";
export const id="dl_9711306679414b2eb497";
export const url=new URL("../icons/lucid_2-layers.svg?v=750c4380a205c9230df86a3e507bff5e3e66c587b99eb480743b64aa9ad03feb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
