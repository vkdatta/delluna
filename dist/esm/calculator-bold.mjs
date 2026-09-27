export const name="calculator-bold";
export const id="dl_67d9b62580be412fa266";
export const url=new URL("../icons/calculator-bold.svg?v=f7b266f3cc9db8686c00e5b9fcaea6b57a7f575797c74cccc1a0347700971a37",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
