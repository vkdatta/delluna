export const name="home_and_garden-fill";
export const id="dl_020fbfa1d8cc922c2f06";
export const url=new URL("../icons/home_and_garden-fill.svg?v=a82aa0cf9d99067e2f82ab245eb15623d05fcf8a964435e0433dac4f9522483c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
