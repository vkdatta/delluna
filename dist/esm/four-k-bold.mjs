export const name="four-k-bold";
export const id="dl_56b70b98749743458e05";
export const url=new URL("../icons/four-k-bold.svg?v=078fa14b720c3b654720afcca00ddb2df34de07e2868c1631dcbeaecd3b02b5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
