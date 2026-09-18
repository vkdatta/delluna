export const name="rotate_auto-fill";
export const id="dl_adda4c725b1349f88775";
export const url=new URL("../icons/rotate_auto-fill.svg?v=023de6d9b38161959bbc5ba686ceaaa017b185d2b1a6cd5a232bf675112691e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
