export const name="peace";
export const id="dl_38dfd4a0df554ec1a837";
export const url=new URL("../icons/peace.svg?v=eb13f84d03b0504e70b11f253ae7709ebaa8bdf23de384d9a488df8b72335fd5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
