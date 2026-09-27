export const name="number-square-six-light";
export const id="dl_b247cad2971e44a6aeca";
export const url=new URL("../icons/number-square-six-light.svg?v=0fa0700a671ed82ff2adfeac8ade35e7e6a7e4af20b99f50990de9119ecf8ce3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
