export const name="rug-bold";
export const id="dl_3e93942c35154d269f6e";
export const url=new URL("../icons/rug-bold.svg?v=057ac47ba9ff88959140ec2c52411d76c17e52e78eef3d46cd517d37fe39d572",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
