export const name="rule-fill";
export const id="dl_21e8a3694787a726a8c8";
export const url=new URL("../icons/rule-fill.svg?v=c871cb6948d923857ae73a990bf59225150901ecd22d596ed7c7b51985d6f6ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
