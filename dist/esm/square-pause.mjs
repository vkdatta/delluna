export const name="square-pause";
export const id="dl_5a8bc502856c4bbfb02c";
export const url=new URL("../icons/square-pause.svg?v=dc47d3e6c2f90ec2e1e41f5f091e73fde634c50247869855576b3b8d9bc3295e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
