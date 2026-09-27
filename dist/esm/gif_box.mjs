export const name="gif_box";
export const id="dl_87c734f57c6e296cf2ee";
export const url=new URL("../icons/gif_box.svg?v=e53a2b5c327792b12ab6c0c4c09243eece619158e5870779e94668f5ebdfc591",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
