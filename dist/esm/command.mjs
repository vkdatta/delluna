export const name="command";
export const id="dl_59fbbd3ff6a145bd9d69";
export const url=new URL("../icons/command.svg?v=b66c22129721825580d692238f0b15ba74ce80a9aa75087232aba2bf3ba6a534",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
