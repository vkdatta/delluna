export const name="sound_sampler-fill";
export const id="dl_1a1e5264bf25b9ac5096";
export const url=new URL("../icons/sound_sampler-fill.svg?v=f14066bdb6ccce5dc199b98c893c9d94893f669ffb2987561972c2de14eda2ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
