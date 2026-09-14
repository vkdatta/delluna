export const name="amp_stories-fill";
export const id="dl_c52d31b7275944788edd";
export const url=new URL("../icons/A/amp_stories-fill.svg?v=174e480c81369bf3f9f7197b823db00e6784e0a6d4efb10505ed1348984aee97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
