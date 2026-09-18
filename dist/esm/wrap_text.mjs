export const name="wrap_text";
export const id="dl_ca22a3154d534a0ba061";
export const url=new URL("../icons/wrap_text.svg?v=650b480e9850bd3ef82d63231866285d740dbf3bf8688a25c6d5ff9b719cb634",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
