export const name="remove_from_queue";
export const id="dl_446a9bfa45ef46e4a847";
export const url=new URL("../icons/remove_from_queue.svg?v=11a60e81e1301b2b941bcd252efccf1a9040f325db97d0a2712ced94cc27ecb2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
