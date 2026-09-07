export const name="square-half-bottom-thin";
export const id="dl_c5dc693dfb8d48d1b89d";
export const url=new URL("../icons/S/square-half-bottom-thin.svg?v=08c4f7d37462353d23241291ba908de72e1bd2747884f226d459bd125f0c6862",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
