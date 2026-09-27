export const name="spinner-ball-fill";
export const id="dl_045d019f62f97af68f29";
export const url=new URL("../icons/spinner-ball-fill.svg?v=182ef4ebf43a071796d3b0cb4b3891deeec4b24dfffd4e97abc7594c9c19c294",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
