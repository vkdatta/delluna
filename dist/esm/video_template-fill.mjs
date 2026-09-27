export const name="video_template-fill";
export const id="dl_4b9160c683e53549e03a";
export const url=new URL("../icons/video_template-fill.svg?v=88b2fbd1dd93a676d9727b899fe7f33f494948ee61caa2bc6338ff60db2ec2c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
