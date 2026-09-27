export const name="compass-rose-light";
export const id="dl_15c7a4ea74fd4f7bbb8d";
export const url=new URL("../icons/compass-rose-light.svg?v=1384817ef55b19c92cfd90bb218c03d72cd051383cb2360f8015b496d77f2f55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
