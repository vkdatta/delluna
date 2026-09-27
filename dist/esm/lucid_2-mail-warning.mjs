export const name="lucid_2-mail-warning";
export const id="dl_a32e4f7580c34f989273";
export const url=new URL("../icons/lucid_2-mail-warning.svg?v=b13c2da9b5a6b7a412be794d044f6503e948de0fbde0444a9cda62a187d55efb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
