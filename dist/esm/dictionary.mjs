export const name="dictionary";
export const id="dl_03b395af7c0543b6920f";
export const url=new URL("../icons/D/dictionary.svg?v=5842957022a894b01fbe102c4b4e28c5226aee63062a70d23fbd7d7158a92e45",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
