export const name="tornado-fill";
export const id="dl_1c37cdabdae6aacc7bf2";
export const url=new URL("../icons/tornado-fill.svg?v=a05d280f40605f59f91e6ec2f17fbd6f429cc4a0d14d76509ef0c16b1be77c50",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
