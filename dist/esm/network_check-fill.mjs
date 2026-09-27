export const name="network_check-fill";
export const id="dl_8fa1ae9205ca48699871";
export const url=new URL("../icons/network_check-fill.svg?v=02c07f630b8b70f052961c207d5b72def3831c43f70a5663d6a0d2d730771971",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
