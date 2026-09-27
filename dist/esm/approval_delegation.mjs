export const name="approval_delegation";
export const id="dl_a38b91e4421d8fa6a6d8";
export const url=new URL("../icons/approval_delegation.svg?v=c616403952b5c3ae2c3a77774f3f30e94d75d5726343be9eaee312a31c5b0a29",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
