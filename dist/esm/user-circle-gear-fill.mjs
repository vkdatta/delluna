export const name="user-circle-gear-fill";
export const id="dl_b9344b8a27b0496982e6";
export const url=new URL("../icons/U/user-circle-gear-fill.svg?v=d3bf677c920f99a99d70da71c0ae4d7bf593f50501fd57f22ab22a5c78ab353f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
