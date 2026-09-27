export const name="3k_plus";
export const id="dl_99fc663b88d4c0956cba";
export const url=new URL("../icons/3k_plus.svg?v=d7e0467eabb737a155e815049fd2050354d7eedadf807e27376a1884923ce228",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
