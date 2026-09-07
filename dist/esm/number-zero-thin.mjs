export const name="number-zero-thin";
export const id="dl_df6bda249bdc4635891a";
export const url=new URL("../icons/number-zero-thin.svg?v=f2610e279ea4dc4b70a0d1574b487b484ef696eadb885dcfaa5efb0e008a7048",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
