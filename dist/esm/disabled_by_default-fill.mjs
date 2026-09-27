export const name="disabled_by_default-fill";
export const id="dl_0574d1dee5979cce53c7";
export const url=new URL("../icons/disabled_by_default-fill.svg?v=74bf889faec0840398bc2cb8ae0b7c38f715fd28ddddca436b20e060c8ee60f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
