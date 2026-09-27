export const name="stress_management-fill";
export const id="dl_9fa9bc08612927c65e4d";
export const url=new URL("../icons/stress_management-fill.svg?v=9e6736b94d65ae12724917c448608605e420c9865e083858fece75794c26cf45",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
