export const name="sun-snow";
export const id="dl_c9607f4f5f9f49beab6f";
export const url=new URL("../icons/sun-snow.svg?v=4184cd72ee2b06877f6d8be1211e5e8930b607292c428edfb3de8b4eafb8a00b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
