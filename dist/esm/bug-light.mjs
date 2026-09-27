export const name="bug-light";
export const id="dl_99e79f692dcb4860b5af";
export const url=new URL("../icons/bug-light.svg?v=4dae57bdf37328797127a49b18404d2ba885c564d501aaed6eea1ab2e425338c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
