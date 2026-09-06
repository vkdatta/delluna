export const name="money-fill";
export const id="dl_2ced6f0e293f462793a9";
export const url=new URL("../icons/money-fill.svg?v=ce4e939c647a80f448c3ec39b671eed5c55744963c0367613b7a4ec9b9aba06b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
