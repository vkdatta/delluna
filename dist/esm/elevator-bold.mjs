export const name="elevator-bold";
export const id="dl_b5d0094497614179bc90";
export const url=new URL("../icons/elevator-bold.svg?v=ec8ca5ae2701abd9561f7a767ad74e9b3a26c381c1dfb05a0494057cbf78378b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
