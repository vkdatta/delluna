export const name="credit_card_off-fill";
export const id="dl_1876f65b9e37cdea028c";
export const url=new URL("../icons/credit_card_off-fill.svg?v=18927d28408b7e6fa7824fd78d335d99625dd529db7ce1c7f9f837cba56d8b45",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
