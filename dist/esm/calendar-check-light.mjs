export const name="calendar-check-light";
export const id="dl_cc96e63847e04f2eac4b";
export const url=new URL("../icons/calendar-check-light.svg?v=cf431985d9221c52b24e57aad775f8812e8ec2911f46f50a734c4c334b3777c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
