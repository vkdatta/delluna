export const name="memory-bold";
export const id="dl_3330cddb60aa47bc9bb0";
export const url=new URL("../icons/memory-bold.svg?v=f5ef433fbb4ba55390f6d681668e7d138eb9a459b35c4e4eba7ad377affddba4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
