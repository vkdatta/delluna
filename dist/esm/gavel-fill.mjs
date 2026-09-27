export const name="gavel-fill";
export const id="dl_b5752b77645f44eaae95";
export const url=new URL("../icons/gavel-fill.svg?v=4e0559ee239ec2f31193a1196f2d81ab422168024a46d028a9151b0a80a05bba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
