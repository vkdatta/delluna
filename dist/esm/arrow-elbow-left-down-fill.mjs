export const name="arrow-elbow-left-down-fill";
export const id="dl_cfd7bf2ec83a420ea58e";
export const url=new URL("../icons/arrow-elbow-left-down-fill.svg?v=2bd2ff22aa8a3939b67c8a88efdcf235b509354c2e38e6ad5a337d755d5ec2f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
