export const name="bell-ringing-bold";
export const id="dl_442fbe9ce9fc4feaa76a";
export const url=new URL("../icons/bell-ringing-bold.svg?v=e88bf41ac8897e3dcfa151aabccb6bf390611e0db8b2efa12a0e2f8453d93396",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
