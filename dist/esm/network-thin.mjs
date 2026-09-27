export const name="network-thin";
export const id="dl_772f66090b364fc5b0b6";
export const url=new URL("../icons/network-thin.svg?v=638967c410a8b17070cac8233619c06bc29ec33e334d913e7ab219360c32d9ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
