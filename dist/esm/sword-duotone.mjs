export const name="sword-duotone";
export const id="dl_c858a966971945f7b0a5";
export const url=new URL("../icons/S/sword-duotone.svg?v=cd2fbecfe734ebc1cb0ddc44c02aa0d6a18882f3deab9fbf7a929df499be0c2c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
