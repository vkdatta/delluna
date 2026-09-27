export const name="baseball-cap-duotone";
export const id="dl_b1e387904629417a92f4";
export const url=new URL("../icons/baseball-cap-duotone.svg?v=dc18774a6a706b5c53f558ea8bb875be058d4978b94d912b8127fb9f17f2a985",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
