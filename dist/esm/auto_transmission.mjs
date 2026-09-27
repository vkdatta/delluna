export const name="auto_transmission";
export const id="dl_423ddbcc3fa6fb9c2355";
export const url=new URL("../icons/auto_transmission.svg?v=2e79392407aa0a7341a333deb47ebbff387fbd263e44c5d8407deeb1d9df1ea9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
