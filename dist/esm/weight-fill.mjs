export const name="weight-fill";
export const id="dl_afb662fdd9bac6bbf52f";
export const url=new URL("../icons/weight-fill.svg?v=ee16586c61d0d776c79acf84ffdf4e792c001509bb337fcbca00ef0c56525022",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
