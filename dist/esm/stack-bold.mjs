export const name="stack-bold";
export const id="dl_0b90b8b2e145bb8d933e";
export const url=new URL("../icons/stack-bold.svg?v=00eac7b7422b7f6566b956b7c555eca692288f180c2807a926f0367bddd65509",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
