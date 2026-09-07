export const name="letter-circle-v-fill";
export const id="dl_8207e13c6e194f3a8148";
export const url=new URL("../icons/letter-circle-v-fill.svg?v=30745d631621a714273ae359a8f145ca0ac8f6a70bbe516ea9daecee5e460c6a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
