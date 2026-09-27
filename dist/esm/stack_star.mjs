export const name="stack_star";
export const id="dl_ef4c065e9b6e52d217fa";
export const url=new URL("../icons/stack_star.svg?v=58907792bda0a5b2d0182546dc2820fe736ee4e793c84e38f1007992a28e7424",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
