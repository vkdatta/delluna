export const name="fast-forward-bold";
export const id="dl_15312ea8543e4c819986";
export const url=new URL("../icons/fast-forward-bold.svg?v=6171b14cc04a33944fd407fbcf4daaf79aa986d5a4ac64da2d833507e2c48822",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
