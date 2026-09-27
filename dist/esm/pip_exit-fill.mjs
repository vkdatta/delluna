export const name="pip_exit-fill";
export const id="dl_78a54f29fded0ea229e0";
export const url=new URL("../icons/pip_exit-fill.svg?v=bf1127c699d76c8e3826a6fab7a362f301139c172269442c480b3398610282e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
