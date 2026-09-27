export const name="arrow-fat-lines-down-light";
export const id="dl_3d1f29ed9091439d9c5a";
export const url=new URL("../icons/arrow-fat-lines-down-light.svg?v=27f7ad68f57302b5e083f2409018acf51a630cee855a363b5ada282c04ebaf60",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
