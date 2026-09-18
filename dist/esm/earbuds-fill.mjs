export const name="earbuds-fill";
export const id="dl_fed5bc463c7d4137a488";
export const url=new URL("../icons/earbuds-fill.svg?v=d67a51f80b8a8b9373254ef6ed339995b15e3e942e9bca25cddc97ee9b67b963",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
