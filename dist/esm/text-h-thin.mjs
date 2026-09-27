export const name="text-h-thin";
export const id="dl_d31209e175919a9e5baa";
export const url=new URL("../icons/text-h-thin.svg?v=2af998ab8444b909651219ed88146c140ed8ad177108461d3355f7d618f4b6d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
