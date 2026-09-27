export const name="peace-bold";
export const id="dl_c3eb2cd3a8444efe90a0";
export const url=new URL("../icons/peace-bold.svg?v=61215ec593ae2dac26e2643bc7e6f820ffc020e89bc4f1448c4152682c6f914e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
