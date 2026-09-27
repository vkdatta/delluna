export const name="swipe_up_alt-fill";
export const id="dl_89e775db4df4becbfde3";
export const url=new URL("../icons/swipe_up_alt-fill.svg?v=43b43b9c8140298a6f635a20440d45ad4741edbc7da7ef2e33a0b7c8c6bf6a30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
