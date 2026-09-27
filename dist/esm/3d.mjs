export const name="3d";
export const id="dl_72c03da5ffa1b3ceca05";
export const url=new URL("../icons/3d.svg?v=97812ba3d4145993e098d4a1d110ed069e811174ee3e86fd08a1daede331fc23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
