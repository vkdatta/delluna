export const name="cloud-warning-bold";
export const id="dl_55737ab971d442d9ae7c";
export const url=new URL("../icons/cloud-warning-bold.svg?v=5ce9de4d97a7210732b5dedae498251e5b251a38a816a5c9cbd70fc4d5b5eb57",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
