export const name="user-round-arrow-left";
export const id="dl_a81cb82ec9074f5fb99b";
export const url=new URL("../icons/user-round-arrow-left.svg?v=737eabb0bf82c0831d87932f2ba2dc684d0b731687e3ccfeb34df2b4ebbf55e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
