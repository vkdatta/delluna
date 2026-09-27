export const name="number-square-two";
export const id="dl_1ae4ca058ff7486581eb";
export const url=new URL("../icons/number-square-two.svg?v=50b4eee19340b1b61c03b453da7aa8f19aff3d0f79827d21f406acc1513058d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
