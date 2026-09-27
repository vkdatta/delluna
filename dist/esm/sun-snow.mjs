export const name="sun-snow";
export const id="dl_c9607f4f5f9f49beab6f";
export const url=new URL("../icons/sun-snow.svg?v=237256458bc4997b2747b7fba291d426772d6e6818c2e977722925a372bc4ea2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
