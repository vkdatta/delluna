export const name="list-numbers-light";
export const id="dl_97745c343185445eae41";
export const url=new URL("../icons/list-numbers-light.svg?v=6b2fd79311de5b5f9e0a079ad71d8d0e3b8d0b4118f91903cde4227ede968d07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
