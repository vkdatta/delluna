export const name="hand-tap-thin";
export const id="dl_a92616a8ac7e4bfc93a8";
export const url=new URL("../icons/hand-tap-thin.svg?v=d88c058b470e4c623af64657dce5a65a6919f552516b10d2c57924559c021ac7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
