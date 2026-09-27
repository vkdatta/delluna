export const name="coins-duotone";
export const id="dl_dd19280a5ced46c4913e";
export const url=new URL("../icons/coins-duotone.svg?v=e09cfc758efb3385d380985b191831bf9f7f29da87a0b563ee90508088eb6c01",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
