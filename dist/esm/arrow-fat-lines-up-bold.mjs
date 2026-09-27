export const name="arrow-fat-lines-up-bold";
export const id="dl_9503d224d0e04f2db658";
export const url=new URL("../icons/arrow-fat-lines-up-bold.svg?v=fcecae3fd32ad757b3217aaa78ef12d4d30a739ec2104c993a5d900c8fd81021",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
