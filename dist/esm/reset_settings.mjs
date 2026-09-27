export const name="reset_settings";
export const id="dl_ba5d26c14e0aa119ba3e";
export const url=new URL("../icons/reset_settings.svg?v=87c3ec7106017f3e4d4d4bc5f96a49c249a1e7407a9a75d9bf6351d234b4e377",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
