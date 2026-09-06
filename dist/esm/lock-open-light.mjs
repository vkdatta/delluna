export const name="lock-open-light";
export const id="dl_fdf4042cfcb34dd3a6e0";
export const url=new URL("../icons/lock-open-light.svg?v=21a5de96148a3956450ddeeaed8e023c03394409bdcf5b38a8ff75aaca7bc268",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
