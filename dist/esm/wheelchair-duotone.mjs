export const name="wheelchair-duotone";
export const id="dl_7e3080115ec2495d9a94";
export const url=new URL("../icons/W/wheelchair-duotone.svg?v=b08987e1b385843cb472d5c8bd762fc763f053e6ae708bedb2d0e53b5b457751",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
