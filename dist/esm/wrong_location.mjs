export const name="wrong_location";
export const id="dl_acf03b5f5e2fbccda52b";
export const url=new URL("../icons/wrong_location.svg?v=d2521163ef75a3fabfc4b6f59c3018b90bc6c892d92314c198cbb9f77fcb4077",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
