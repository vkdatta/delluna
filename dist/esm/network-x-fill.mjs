export const name="network-x-fill";
export const id="dl_338bfdc0a0714e889968";
export const url=new URL("../icons/network-x-fill.svg?v=b6890112ece241104aea7c0ca77709a8e8fd8b4de8e9a28be86190f1bb7b8ff0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
