export const name="joystick-light";
export const id="dl_0f6aa779ab2341e0884e";
export const url=new URL("../icons/joystick-light.svg?v=b8f2e2610601e78aff21df17ecdb715a382b6ac1317f44bdc81c551a7abd00f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
