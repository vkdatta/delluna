export const name="shield-checkered-thin";
export const id="dl_5b751063f7fd43b7923f";
export const url=new URL("../icons/S/shield-checkered-thin.svg?v=2fc0ece13eb1fdf68ba6799d376836ba187f5ac9583573175ffc35f15d744b22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
