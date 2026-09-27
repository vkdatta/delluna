export const name="shield-checkered-thin";
export const id="dl_45c00e82043e19f562d9";
export const url=new URL("../icons/shield-checkered-thin.svg?v=2fc0ece13eb1fdf68ba6799d376836ba187f5ac9583573175ffc35f15d744b22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
