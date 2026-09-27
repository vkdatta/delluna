export const name="trending-up-down";
export const id="dl_e587c032a788459f8caf";
export const url=new URL("../icons/trending-up-down.svg?v=ec9057b3c22d37b20ee3b11b44cbfa051799e3338df9081ed535c23b40294d3f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
