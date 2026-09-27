export const name="apple-podcasts-logo-duotone";
export const id="dl_c05b4aa62b9e4c04a9bc";
export const url=new URL("../icons/apple-podcasts-logo-duotone.svg?v=94059b284073bcbdc9f709bf86f424432f00f9f476b0fcc8302aa28e552cb3ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
