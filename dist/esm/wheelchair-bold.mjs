export const name="wheelchair-bold";
export const id="dl_845eb81d4ce6c2cb23b8";
export const url=new URL("../icons/wheelchair-bold.svg?v=5ec6d9d60a23099d2f04e1c3c9ddc5734000b770ef78e1e5b33cb1c7c51b4b44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
