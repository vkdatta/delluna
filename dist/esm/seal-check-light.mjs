export const name="seal-check-light";
export const id="dl_14fd7ec554424329a346";
export const url=new URL("../icons/S/seal-check-light.svg?v=8f12ff811dded1b7d0a1e34514ba702a295840419b7acaf1e46442c137cb23c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
