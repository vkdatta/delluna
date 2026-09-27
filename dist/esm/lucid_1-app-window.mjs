export const name="lucid_1-app-window";
export const id="dl_71ded04ce09a49d0bd2a";
export const url=new URL("../icons/lucid_1-app-window.svg?v=23c663281a17ce6d5f7ee055ccf9e486f55149f19af0661a28b3d7a7a3de5bb8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
