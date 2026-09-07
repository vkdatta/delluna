export const name="number-square-seven";
export const id="dl_f257ff2cab4e4fe99bb7";
export const url=new URL("../icons/number-square-seven.svg?v=3e4abcd432d08a26ee271b20c1d37ca3692239508aac3b9d1b0efb66c8583799",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
