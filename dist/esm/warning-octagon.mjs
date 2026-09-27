export const name="warning-octagon";
export const id="dl_e1fc3bbb802706f1bf6b";
export const url=new URL("../icons/warning-octagon.svg?v=bd88fbd0e7a60bcaca98885d4e81a4eb66469baa459e58c6aee2e979b7f9193e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
