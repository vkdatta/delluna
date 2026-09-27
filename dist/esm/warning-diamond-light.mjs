export const name="warning-diamond-light";
export const id="dl_264b45a68bf85bd2585f";
export const url=new URL("../icons/warning-diamond-light.svg?v=0b27da2e1365661291e05f8ebabdcd31a93fedbe4e06cd1b90cad2c9b5a4b048",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
