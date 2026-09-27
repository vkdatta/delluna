export const name="sidebar-duotone";
export const id="dl_6ad6d5ec2e0d388641db";
export const url=new URL("../icons/sidebar-duotone.svg?v=d7fc8d260b9632aa5499c2208f629d2f2f01bbb2c9705d467bf8c3fd2e72655d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
