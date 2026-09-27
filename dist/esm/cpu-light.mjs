export const name="cpu-light";
export const id="dl_f27460f6a5124c8bb221";
export const url=new URL("../icons/cpu-light.svg?v=37b3ae739992674e49add83ab0c96020e8bef3936a587a1329c0787e8e6b2182",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
