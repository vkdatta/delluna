export const name="arrow-square-right-light";
export const id="dl_eb4b89cf99444dfba6f0";
export const url=new URL("../icons/arrow-square-right-light.svg?v=a3a958c5d1dd46b80919fb29d9ef6d335931cecf94271d88d9ca28db8ad5414a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
