export const name="sign-out";
export const id="dl_0c697ee5e44eadc506dc";
export const url=new URL("../icons/sign-out.svg?v=c1d22ffd6d151201c0fa907e43d3b420df631df6b4edc9a3ffd136648f00db34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
