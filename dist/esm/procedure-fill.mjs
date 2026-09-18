export const name="procedure-fill";
export const id="dl_c86afb97bb2942c098c0";
export const url=new URL("../icons/procedure-fill.svg?v=6bd186c8e520023c098d4e6398acfd5fa4f76ec6ad12bba438bdf693deae8401",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
