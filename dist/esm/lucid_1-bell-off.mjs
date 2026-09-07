export const name="lucid_1-bell-off";
export const id="dl_3dee5997347f422b8180";
export const url=new URL("../icons/lucid_1-bell-off.svg?v=0e4a67fd1ddd0b84f78543ef101de6ee861f184fcf581749fd5b866152790838",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
