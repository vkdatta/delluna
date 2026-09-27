export const name="priority";
export const id="dl_7663863377fb66592e5c";
export const url=new URL("../icons/priority.svg?v=9d33173f9dd88ceba0b53f7e5f0ec2c55ec615c3a26155f9f8b592f5bbe08814",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
