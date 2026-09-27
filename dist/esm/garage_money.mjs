export const name="garage_money";
export const id="dl_62498479ee4b29df025e";
export const url=new URL("../icons/garage_money.svg?v=4870074fe5f1ffa6a90b286260dbd1c93b554bf8fa04156fe1686bd0347adad2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
