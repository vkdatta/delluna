export const name="text-h-one-fill";
export const id="dl_20a8193f1d24be476c3a";
export const url=new URL("../icons/text-h-one-fill.svg?v=cb92e2ed245c04523d7c49effc49f381b1a7385f937d2f38e19031a3dfae1439",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
