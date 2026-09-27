export const name="glucose";
export const id="dl_0bcfdc109d06aeaa2f2c";
export const url=new URL("../icons/glucose.svg?v=3762ddbe57281d0a566b00e2284b8446a66a747a55dff5d2c58a689a1c9742e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
