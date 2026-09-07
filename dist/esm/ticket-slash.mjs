export const name="ticket-slash";
export const id="dl_84fccd5eb9b24ec2ac98";
export const url=new URL("../icons/ticket-slash.svg?v=504fd008eaf4cc0091d2380485f61ab90eef34f5d1d49b82420e9ca267e55489",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
