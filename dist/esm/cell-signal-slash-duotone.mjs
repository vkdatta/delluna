export const name="cell-signal-slash-duotone";
export const id="dl_7a5ac31a184e460fb219";
export const url=new URL("../icons/cell-signal-slash-duotone.svg?v=c10fb7ec329cc82b8414677296d138cb8902980f85bcc7271c59344fdb3d9892",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
