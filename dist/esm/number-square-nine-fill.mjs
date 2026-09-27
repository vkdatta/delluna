export const name="number-square-nine-fill";
export const id="dl_5b78cefd661248498100";
export const url=new URL("../icons/number-square-nine-fill.svg?v=62af4cbe95d7fffd0e242acab101bdedf0bb0c64c7c5a46d8b330b92a5a7c496",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
