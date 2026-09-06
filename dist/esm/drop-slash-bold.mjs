export const name="drop-slash-bold";
export const id="dl_37b4873bbfb7459486b9";
export const url=new URL("../icons/drop-slash-bold.svg?v=723036917367a517070a5eb1cf51985f747c6a89ce5ba98e1b522abbc3fb0ded",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
