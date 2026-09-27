export const name="number-eight-fill";
export const id="dl_7727e94ab53c45c6a134";
export const url=new URL("../icons/number-eight-fill.svg?v=375a2287972904fc85c90978f56e020682015f60e10cc1cfde1f45c44aade36a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
