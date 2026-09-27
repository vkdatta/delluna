export const name="air-traffic-control-bold";
export const id="dl_1fa8cb41aa8c43b5bc80";
export const url=new URL("../icons/air-traffic-control-bold.svg?v=18ec33c112a029b29e18f3af4045e3fa18c94f0a84a4ce8675a2468c29a6168b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
