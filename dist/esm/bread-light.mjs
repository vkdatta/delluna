export const name="bread-light";
export const id="dl_20e30b0510014a96ba80";
export const url=new URL("../icons/bread-light.svg?v=e76229ae6cc08abb326570fe26b763f1e3f77171b21e18bc6970723dc9271fb4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
