export const name="file-tsx-bold";
export const id="dl_4178ec6f411b4c5f8c31";
export const url=new URL("../icons/file-tsx-bold.svg?v=492932e486e7289b7c86023fd2e3677f6c1244382cc496700ed01f252233215b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
