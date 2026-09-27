export const name="cell-signal-slash-duotone";
export const id="dl_7a5ac31a184e460fb219";
export const url=new URL("../icons/cell-signal-slash-duotone.svg?v=06f60e94b733421470cc66945d89927639782d17647e8a685e4edd2d7b0825b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
