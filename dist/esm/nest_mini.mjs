export const name="nest_mini";
export const id="dl_eca4855dfc92d0c84bf3";
export const url=new URL("../icons/nest_mini.svg?v=72eb9f716ca8a731935a9b1527a9bc1bcb60cfd53dc5704ac9b0025120ef7fa6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
