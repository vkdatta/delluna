export const name="cell-tower-thin";
export const id="dl_ab59841681fe425db5ae";
export const url=new URL("../icons/cell-tower-thin.svg?v=15bec5149ec4647752070d2a500d4ede14e9fc0725959e93eaa39c610b212b96",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
