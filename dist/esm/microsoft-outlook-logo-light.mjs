export const name="microsoft-outlook-logo-light";
export const id="dl_d2ecb954a4424363a8c1";
export const url=new URL("../icons/microsoft-outlook-logo-light.svg?v=100396c11cf24938a2fcc846847e8b57c3516918ee6c18f481d120b0fe1d1952",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
