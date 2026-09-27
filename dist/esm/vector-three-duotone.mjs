export const name="vector-three-duotone";
export const id="dl_ec59901fc65e07c257a9";
export const url=new URL("../icons/vector-three-duotone.svg?v=59e801da9d4a43a6908cbf66eeea892c4fd83a578114fa29ff8244ba672e6482",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
