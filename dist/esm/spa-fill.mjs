export const name="spa-fill";
export const id="dl_41574da41380e0c2fbb9";
export const url=new URL("../icons/spa-fill.svg?v=ab43944197e5e8f04c4476a88530b20138e4c91a2462fa06c67ade024302f63e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
