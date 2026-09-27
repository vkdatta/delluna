export const name="network_check-fill";
export const id="dl_42aaca3e8e81dd31f2bd";
export const url=new URL("../icons/network_check-fill.svg?v=ecd05cad7881fdcae31ad53456be8544ae8da0fb2d367085192e6b2b21200b43",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
