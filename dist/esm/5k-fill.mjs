export const name="5k-fill";
export const id="dl_a7ca523c5046c968b530";
export const url=new URL("../icons/5k-fill.svg?v=971895c4b338a7ba9480c909390b98b8086e2c2b12261b1ef2b4a88562f86ca7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
