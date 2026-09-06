export const name="link-light";
export const id="dl_58377e4acf014ad6840e";
export const url=new URL("../icons/link-light.svg?v=3de71f61349a9dc7a14d0b1d40849b565777e697560cef67107918ab7aa85d0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
