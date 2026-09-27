export const name="local_police-fill";
export const id="dl_f2c0989ff2804254595a";
export const url=new URL("../icons/local_police-fill.svg?v=74f470afe0909b07ccc51d15dea8c347aa973e33d5fb963ec176bea57685b13c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
