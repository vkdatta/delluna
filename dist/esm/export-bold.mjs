export const name="export-bold";
export const id="dl_4d71f244b1944670b7e9";
export const url=new URL("../icons/export-bold.svg?v=7c2b31b1e23c2ec16c69fc324bf2cd90aeee956e726fec96dbcb597ec2fdba63",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
