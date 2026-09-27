export const name="align-center-horizontal";
export const id="dl_e2fb9bd5dac94eddb2e9";
export const url=new URL("../icons/align-center-horizontal.svg?v=66cedbf479c903d31082ae3f0972f0447ef0ea12e22f81bb9eb07ed5ac800cbc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
