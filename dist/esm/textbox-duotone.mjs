export const name="textbox-duotone";
export const id="dl_49b346d9f2e890feb2c7";
export const url=new URL("../icons/textbox-duotone.svg?v=62914ea515f8018fe14943cfa71e3a3cda7bede37d8537289a372c39cb204de7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
