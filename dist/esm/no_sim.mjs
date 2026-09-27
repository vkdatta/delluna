export const name="no_sim";
export const id="dl_99af4c7297daf4e293da";
export const url=new URL("../icons/no_sim.svg?v=c655e0c69ef4d51938951f2362a622a977122d14caeb36d447d8670ace6f7867",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
