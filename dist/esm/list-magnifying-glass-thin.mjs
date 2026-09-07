export const name="list-magnifying-glass-thin";
export const id="dl_ddecdb94b6de482496f3";
export const url=new URL("../icons/list-magnifying-glass-thin.svg?v=a3c203f96b758f8215a7db3e6ceedd73f354655bef111e85fe370f245a323359",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
