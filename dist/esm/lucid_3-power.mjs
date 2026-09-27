export const name="lucid_3-power";
export const id="dl_4559f4e6212549589861";
export const url=new URL("../icons/lucid_3-power.svg?v=0b27c444e819c0592e19440b268d2552eca213c098d7bd27109e2ae8e50dde10",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
