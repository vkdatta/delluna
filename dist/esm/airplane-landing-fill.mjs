export const name="airplane-landing-fill";
export const id="dl_0b0d629fdea847bda49b";
export const url=new URL("../icons/airplane-landing-fill.svg?v=1c3e695723c9cfd83b20e76feb300f388118af5a4f8650d58c86736c8d4be454",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
