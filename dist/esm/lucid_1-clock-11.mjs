export const name="lucid_1-clock-11";
export const id="dl_04e58e497cf043038d42";
export const url=new URL("../icons/lucid_1-clock-11.svg?v=8bdb67e5e0645085a567b42347c307a7a0470d1e8aaa4531eef892c6ae20a3d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
