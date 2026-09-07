export const name="square-equal";
export const id="dl_84f69252e35e4826ac61";
export const url=new URL("../icons/square-equal.svg?v=166be6f4af6281324372b88bc1692e24a7e3cf6c1de6032fcd002358ffcaeeff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
