export const name="lucid_3-mountain";
export const id="dl_5f68bbb237314da7b205";
export const url=new URL("../icons/lucid_3-mountain.svg?v=01feb2a9750af57928e218f6e43d27187f7745c7833bfb86f51c550b0203a85b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
