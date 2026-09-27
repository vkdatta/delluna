export const name="cloud-slash-duotone";
export const id="dl_c04fe20964b74418b163";
export const url=new URL("../icons/cloud-slash-duotone.svg?v=936ffa444a6d651138f18fa66699e317f403726a57a46374e282351479b5a2ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
