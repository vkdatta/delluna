export const name="euro_symbol";
export const id="dl_b921bf6402c35306e463";
export const url=new URL("../icons/euro_symbol.svg?v=7dc1df96f478a46297668ce42607263662e4b69c3f4d06e356048c7f478c0ce9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
