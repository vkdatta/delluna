export const name="back-dismiss";
export const id="dl_aeba992458a84d5f5050";
export const url=new URL("../icons/back-dismiss.svg?v=43a0a3025b870e86b115167eb43b5654b217605164360931ef3c6f65c15d531b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
