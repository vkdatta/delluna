export const name="pencil-simple-line-fill";
export const id="dl_75c20471751f493eb34b";
export const url=new URL("../icons/pencil-simple-line-fill.svg?v=481eaf55ab2b662a8897e27dafad13f73752f6dcb38b2a9f6d86d9000de0b8e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
