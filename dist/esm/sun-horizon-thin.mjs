export const name="sun-horizon-thin";
export const id="dl_3da06a4cf4f2f059d9a4";
export const url=new URL("../icons/sun-horizon-thin.svg?v=541ab325e8cfa2237a1bed305fcf086260287e4d95b7f299a1972749600c6f5b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
