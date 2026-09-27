export const name="engine-thin";
export const id="dl_a9a490150f194727b7c2";
export const url=new URL("../icons/engine-thin.svg?v=3df1ef124853019d032c0ff7067258df5c9a5657615a82bbb9d0e078cf6e3206",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
