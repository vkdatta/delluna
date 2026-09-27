export const name="fire-truck-thin";
export const id="dl_6362a67ba7374ac699ca";
export const url=new URL("../icons/fire-truck-thin.svg?v=6f6a5afaf5db3e5fa8ed801f5b42fbbe38bb6b71ddf00121b753e156b145f0e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
