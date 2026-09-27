export const name="ticket-slash";
export const id="dl_84fccd5eb9b24ec2ac98";
export const url=new URL("../icons/ticket-slash.svg?v=ebec6dccf13ce852b20724889b330cc24538c309d403a70adb9161aba70db17e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
