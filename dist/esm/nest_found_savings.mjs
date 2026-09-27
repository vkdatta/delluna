export const name="nest_found_savings";
export const id="dl_8051bf242813a03844a6";
export const url=new URL("../icons/nest_found_savings.svg?v=1552e10fe7898c8f28b42b51c3a9d3f80bdd03c84d7f7511ece33c81dec64cd8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
