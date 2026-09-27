export const name="minimize-fill";
export const id="dl_5325d9182deabd650ef3";
export const url=new URL("../icons/minimize-fill.svg?v=a7cac578d4b2bcb83e8b4f159a9440b3050f4929b8e95cf422a02f051064fac6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
