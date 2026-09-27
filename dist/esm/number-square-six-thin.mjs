export const name="number-square-six-thin";
export const id="dl_6e141e388ee34bce9151";
export const url=new URL("../icons/number-square-six-thin.svg?v=ed4a09be2b4a4a0d943b0287e6b3449b7d67c3522544d0714006618bd6f5e655",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
