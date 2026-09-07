export const name="train-regional-thin";
export const id="dl_f49b5491b1fa4a7b8cd3";
export const url=new URL("../icons/T/train-regional-thin.svg?v=e562e2a76fbed48eb74a7a72bfe053b92666783d3e31e4c86a4a897e5a87dcd6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
