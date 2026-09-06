export const name="biohazard-thin";
export const id="dl_146122b90f8c43a898ae";
export const url=new URL("../icons/biohazard-thin.svg?v=03ee5876f0fbe57971b23db46362641d30f903ac3a503f3268839e1a54ad1520",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
