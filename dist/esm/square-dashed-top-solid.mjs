export const name="square-dashed-top-solid";
export const id="dl_506e73030ea841718898";
export const url=new URL("../icons/square-dashed-top-solid.svg?v=d02514d69f0be6b2b5f59595d646fd7b92380bb37cbf6e3a219b38ab79d8fa57",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
