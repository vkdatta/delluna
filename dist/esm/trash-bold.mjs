export const name="trash-bold";
export const id="dl_24425c1679a8415dae24";
export const url=new URL("../icons/T/trash-bold.svg?v=14f3fa7bf3588b279a104e6a19b16809fa54f1c2185e2811d3c47cab559f79d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
