export const name="home_improvement_and_tools";
export const id="dl_4ff08683e92cdad3cb09";
export const url=new URL("../icons/home_improvement_and_tools.svg?v=1122161d3d831ed358dcd781dabf6ae0d48a2a4aa4f3f19372ffafffbe012ef3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
