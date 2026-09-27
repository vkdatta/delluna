export const name="dishwasher";
export const id="dl_fe50647c0c1670ac6af5";
export const url=new URL("../icons/dishwasher.svg?v=d61edc57738294c5459895e7c2d7f0177a0ad2b82192766b33141975fba16f0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
