export const name="square-library";
export const id="dl_4c1ef0ec2f9a45e78ebe";
export const url=new URL("../icons/square-library.svg?v=c7ec8f91bc0cec5e91afcf304bf7ef1f769a09b183b2a4d4d0c55545af11323f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
