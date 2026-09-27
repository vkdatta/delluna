export const name="lucid_1-combine";
export const id="dl_3310eef0cd134657bfee";
export const url=new URL("../icons/lucid_1-combine.svg?v=8e90c6231a6ded6cc9839fe123d1414d646e79933e6851cea2c3fc5d9e5f7d66",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
