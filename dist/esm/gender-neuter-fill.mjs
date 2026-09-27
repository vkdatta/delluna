export const name="gender-neuter-fill";
export const id="dl_6372a6b22db64c05ab69";
export const url=new URL("../icons/gender-neuter-fill.svg?v=e72c0c8996fe31b7f390ab71b8714aae58a27a890efd666c270fc50e3edeeff5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
