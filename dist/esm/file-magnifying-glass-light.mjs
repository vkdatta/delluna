export const name="file-magnifying-glass-light";
export const id="dl_7d5a37b943254f399e23";
export const url=new URL("../icons/file-magnifying-glass-light.svg?v=06b9a9fa521f672a26e53f06092483c8f57fb45557e54e7481d5d51c73d4187f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
