export const name="diamonds-four";
export const id="dl_60eece63a64d4f83889f";
export const url=new URL("../icons/diamonds-four.svg?v=fd101823acdf450288dd5163713a40adbdbaf901e1085373c60e31e8f0fb0c39",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
