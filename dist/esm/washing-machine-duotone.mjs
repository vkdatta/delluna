export const name="washing-machine-duotone";
export const id="dl_019e6b9d34004a8382d5";
export const url=new URL("../icons/W/washing-machine-duotone.svg?v=812797d03a99a66740019c23fe0611501284294616f496bc419a111b3a44b532",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
