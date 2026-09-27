export const name="ticket-slash";
export const id="dl_84fccd5eb9b24ec2ac98";
export const url=new URL("../icons/ticket-slash.svg?v=ecd644ab2368ce8b7d00161eb294149b8b8415cd9e7d6495f8643de417a60b13",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
