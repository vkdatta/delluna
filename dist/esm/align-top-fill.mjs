export const name="align-top-fill";
export const id="dl_4e5e932e00fb42d8a01e";
export const url=new URL("../icons/align-top-fill.svg?v=f283e303a25beab210d9b91630ca8eff65e5144da4f0f823b641bee3b48fc122",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
