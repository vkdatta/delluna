export const name="empty-fill";
export const id="dl_5d7e7df76cb04e579ca3";
export const url=new URL("../icons/empty-fill.svg?v=a20a2f850e715b013df7ee59c78f47588d898ac1fd8567b14c5f812f12d7d87d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
