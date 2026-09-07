export const name="user-check-thin";
export const id="dl_5101a27083ec4dbdb8eb";
export const url=new URL("../icons/U/user-check-thin.svg?v=4dce40e6369d5cc9fb2ff54f41c8147de6b45132a0ec2950730ba2cedb4ac196",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
