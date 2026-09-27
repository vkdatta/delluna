export const name="split-horizontal-thin";
export const id="dl_b4e0ac2b1fa551fa20ef";
export const url=new URL("../icons/split-horizontal-thin.svg?v=cb05657557dc34911266687d7f52d20b5e7d83c813cd0985ca8660b6f4c17b07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
