export const name="option";
export const id="dl_f40aee25173941fc8b8a";
export const url=new URL("../icons/option.svg?v=9c0f02479b00d501cfbb0f62368943e550867fed398ea8586f344be8f3a1422d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
