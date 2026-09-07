export const name="arrow-line-up";
export const id="dl_76e2f41837584e38b24e";
export const url=new URL("../icons/arrow-line-up.svg?v=ad57c6bf088a57595fc8f37928cf3d8793ca38ec01e4e9aeb7acb155ec2e1d3a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
