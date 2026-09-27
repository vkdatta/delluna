export const name="lucid_3-mouse-pointer";
export const id="dl_8a8be6e68b3b4b3589ad";
export const url=new URL("../icons/lucid_3-mouse-pointer.svg?v=359a6f071b187341bdf05a30222763a816714e588e65e3ec4857298cd594ba4a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
