export const name="square-split-vertical";
export const id="dl_21f1677d3971489c98b3";
export const url=new URL("../icons/square-split-vertical.svg?v=a5e76a64a11230b5d8042e93b349f211d9bce90243793e27edd10bd52c5fb910",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
