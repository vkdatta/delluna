export const name="square-split-vertical";
export const id="dl_21f1677d3971489c98b3";
export const url=new URL("../icons/square-split-vertical.svg?v=459df9633794fea03a5660723e98f55c4add9a851d29833d5e8f438560362ca8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
