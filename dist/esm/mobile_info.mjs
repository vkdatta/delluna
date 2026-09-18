export const name="mobile_info";
export const id="dl_74639c0bf2f9415ab042";
export const url=new URL("../icons/mobile_info.svg?v=ed77275e792b8b9f375a89a1cee92073b6107950b3ed6df1e986c61fd5456f11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
