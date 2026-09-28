export const name="spinner-ball-fill";
export const id="dl_4194d58da9bbcf7e75a0";
export const url=new URL("../icons/spinner-ball-fill.svg?v=04625d9ffca58e264131d55203c85b79d5f924ef11ce64e17e74b5c01cff7b1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
