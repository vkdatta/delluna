export const name="checkerboard-thin";
export const id="dl_12c7199f1cbf4f899d2a";
export const url=new URL("../icons/checkerboard-thin.svg?v=7d52002706991606e4c46ef71dbb7b690fe8144a29fedcb6fde57c7cb277c362",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
