export const name="lucid_3-move-vertical";
export const id="dl_2b6e78926ee7493ebe6f";
export const url=new URL("../icons/lucid_3-move-vertical.svg?v=3ff6cc628e1e351381e3e05d309ad4f4dfe774e3f57204e14445a498b5922d54",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
