export const name="checkerboard-thin";
export const id="dl_12c7199f1cbf4f899d2a";
export const url=new URL("../icons/checkerboard-thin.svg?v=6bfb9dce918639e18c5edfd3cd936b1f7c14d9432e1e373c1809a20d2143a95f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
