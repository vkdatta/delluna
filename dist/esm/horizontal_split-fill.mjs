export const name="horizontal_split-fill";
export const id="dl_bb5cb48f199840349291";
export const url=new URL("../icons/horizontal_split-fill.svg?v=dce46b382ca20847e77f4fb4a35a92ac17dde69dbce28b747b7ba7b5e9dacdcf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
