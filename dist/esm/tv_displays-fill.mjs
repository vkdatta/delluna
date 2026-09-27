export const name="tv_displays-fill";
export const id="dl_4e7fbd0ff0e5d3b96e00";
export const url=new URL("../icons/tv_displays-fill.svg?v=d15cbc3e70c3d7c8de73f8e8420b7f1e5202932c9b55ad0213251b46244d1356",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
