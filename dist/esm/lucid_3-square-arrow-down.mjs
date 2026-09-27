export const name="lucid_3-square-arrow-down";
export const id="dl_62d1fcacb07745908f71";
export const url=new URL("../icons/lucid_3-square-arrow-down.svg?v=250fd09a87fe9021855643ca3c0d5cdfc698ca617e051935c3bfdbdf604a13ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
