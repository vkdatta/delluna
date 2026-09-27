export const name="umbrella-duotone";
export const id="dl_b5306a59c46c3389357d";
export const url=new URL("../icons/umbrella-duotone.svg?v=6599ec6b8db54bb1bfa2c94ef2f2892aa007d8286804324768b05a4f66d1be43",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
