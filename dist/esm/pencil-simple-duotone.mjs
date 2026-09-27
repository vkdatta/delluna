export const name="pencil-simple-duotone";
export const id="dl_fc36b873025c444192c8";
export const url=new URL("../icons/pencil-simple-duotone.svg?v=fcffeebd8d76093bca46bb8c496edda46e1d27bd0592a0014a2f9651134caa6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
