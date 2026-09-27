export const name="lucid_2-lock-open";
export const id="dl_43cf258b931d430694e8";
export const url=new URL("../icons/lucid_2-lock-open.svg?v=a61bbf32f83cef718f55c702a7ce9cc93fa748d8ab19bdb5f215d3a3c9a6a3bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
