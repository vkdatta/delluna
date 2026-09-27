export const name="arrows-counter-clockwise-fill";
export const id="dl_89c8a06e684d4446b958";
export const url=new URL("../icons/arrows-counter-clockwise-fill.svg?v=2e45e3f1985c97744b11d72c45bc31529283f03c3bc0427a474c4ed1ade6a844",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
