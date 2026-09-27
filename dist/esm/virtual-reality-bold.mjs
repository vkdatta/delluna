export const name="virtual-reality-bold";
export const id="dl_1c72824d5a49291aacc7";
export const url=new URL("../icons/virtual-reality-bold.svg?v=a4709765b5511d86e03a96ff470ba680ef0e267cd08dc035a0619f872bb25792",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
