export const name="tornado-bold";
export const id="dl_82b3de04ac1a4f8da602";
export const url=new URL("../icons/T/tornado-bold.svg?v=796145d3f714656dc99ff2af69ec2e9fa0d387472d8cf596b4f140cb25f406d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
