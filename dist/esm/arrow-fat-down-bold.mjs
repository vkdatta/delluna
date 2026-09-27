export const name="arrow-fat-down-bold";
export const id="dl_e4ae3224500f4d88b8a4";
export const url=new URL("../icons/arrow-fat-down-bold.svg?v=16489b310bbc88c966e8d1061e086874f1b20e5a77bc25324cc98b8a76aecc6a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
