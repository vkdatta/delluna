export const name="island-thin";
export const id="dl_27bdc8c816c649f2a95b";
export const url=new URL("../icons/island-thin.svg?v=f86c94d37440ffd9872a65456832255bb27478980bc41cbb72ec2538532b7d3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
