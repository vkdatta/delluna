export const name="hoodie-duotone";
export const id="dl_654828b44a15493e83a8";
export const url=new URL("../icons/hoodie-duotone.svg?v=4258f34def52f5a99929843eb2a056c8e0081688c98b00eab5cb52b8816d635e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
