export const name="cottage";
export const id="dl_a3d050dec4d7ef342809";
export const url=new URL("../icons/cottage.svg?v=7f5dbbc7b90b27b5d82dd1a2961c74aefe6452c4041c3c1483257aa83d9b1e01",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
