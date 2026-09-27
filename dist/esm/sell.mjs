export const name="sell";
export const id="dl_3fd0307d7e089da362b9";
export const url=new URL("../icons/sell.svg?v=f53e97f6e57b82d8f1079b6005c11d7130e90b44c02580e207db933bfbb4ccb7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
