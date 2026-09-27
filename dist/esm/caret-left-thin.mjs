export const name="caret-left-thin";
export const id="dl_611b9537f1454c1b941a";
export const url=new URL("../icons/caret-left-thin.svg?v=fcaebc14fc5ad8f1d82e8120a8c7566ab5c1bc13caf98d177f53ec1f2e3f8d68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
