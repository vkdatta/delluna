export const name="list-checks-bold";
export const id="dl_cf3be4551a79499b97cb";
export const url=new URL("../icons/list-checks-bold.svg?v=11df339bef68b7fe0e04c6604824c515dee06d9f3423004eb331af7720ffa5a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
