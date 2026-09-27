export const name="egg-fill";
export const id="dl_388b06aeaaa941f49610";
export const url=new URL("../icons/egg-fill.svg?v=43bb47fac87f4192f6d399a9b0c7fb1740b38f10f0f29542af61bc37842e64c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
