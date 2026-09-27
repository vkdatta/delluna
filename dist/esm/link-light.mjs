export const name="link-light";
export const id="dl_58377e4acf014ad6840e";
export const url=new URL("../icons/link-light.svg?v=c931a7eb0dcd01deb5c9d06483dcb6f9aa8d35d3da7b151b6f65b16543bd35ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
