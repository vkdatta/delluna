export const name="lucid_1-badge-swiss-franc";
export const id="dl_f089285fc87e422cb150";
export const url=new URL("../icons/lucid_1-badge-swiss-franc.svg?v=55ab65d4bbb8ada24b17b02940f8990d81838358638be09715f512b69ed8d514",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
