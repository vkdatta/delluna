export const name="t-shirt-bold";
export const id="dl_7be8125087df940f151d";
export const url=new URL("../icons/t-shirt-bold.svg?v=c064a79d9ca1661aad2f93be3c34882c38a9d04b2ccdb161ce1fdff6efff1b28",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
