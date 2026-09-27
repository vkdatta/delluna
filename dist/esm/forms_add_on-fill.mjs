export const name="forms_add_on-fill";
export const id="dl_a39c85a36bdfa92e4396";
export const url=new URL("../icons/forms_add_on-fill.svg?v=adaa28c1906f5cbcc3b75a2a4e5d23a3fa50b4b38847e273fead850a5df5fe93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
