export const name="ifl";
export const id="dl_8ab0c724db911e286835";
export const url=new URL("../icons/ifl.svg?v=a1a07c54767f786a948b1ced1f3f7364669c045fafe51b90c28b9ffa0fe23a8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
