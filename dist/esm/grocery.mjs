export const name="grocery";
export const id="dl_f9caf9f4256bea5e3cfe";
export const url=new URL("../icons/grocery.svg?v=cf55983f6a4d2d62106ca314157b18e8ccdcc3c5ac486599d20b1b2e16df3378",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
