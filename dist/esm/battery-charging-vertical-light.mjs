export const name="battery-charging-vertical-light";
export const id="dl_ab4d5484b8e64f84b07b";
export const url=new URL("../icons/battery-charging-vertical-light.svg?v=a0fea413b677fd4727afbc43bcbfe0597c9fc3d7ede6e0ff0d7aa3915e6f6766",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
