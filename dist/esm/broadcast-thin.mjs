export const name="broadcast-thin";
export const id="dl_e2faaf8dae2442bb88ee";
export const url=new URL("../icons/broadcast-thin.svg?v=08d61bdbd6aea7d945df23938ff4f4a31148f0afd9789c3d71dd0c11e1506bda",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
