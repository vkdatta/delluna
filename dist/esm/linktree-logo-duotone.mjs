export const name="linktree-logo-duotone";
export const id="dl_5d59b1c36d2b477fa09d";
export const url=new URL("../icons/linktree-logo-duotone.svg?v=fab1bb5ada5d978a2dc1911e34e7db2489d702b5d3c9edbaba5fb7d5fb8c6b7d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
