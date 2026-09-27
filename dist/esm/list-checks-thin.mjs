export const name="list-checks-thin";
export const id="dl_c2e256a6d6114adca949";
export const url=new URL("../icons/list-checks-thin.svg?v=96beb6c10427d2db3bd5ed580d3e5662d060ea69799a82834280670a6bbe64f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
