export const name="number-square-two";
export const id="dl_1ae4ca058ff7486581eb";
export const url=new URL("../icons/number-square-two.svg?v=63c51e102316ea275c8e451ee75ea71ffc9086a8f80e830c4fdef91391dcac9f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
