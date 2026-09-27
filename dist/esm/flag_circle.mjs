export const name="flag_circle";
export const id="dl_33952cf208873749afbf";
export const url=new URL("../icons/flag_circle.svg?v=d7239c944ca8e2ad7a7740993775c0ce3269cf7a56c867ce352da9b6f3cde1f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
