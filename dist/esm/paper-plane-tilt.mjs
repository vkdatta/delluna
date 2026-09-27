export const name="paper-plane-tilt";
export const id="dl_b25434ad073d45ca80d0";
export const url=new URL("../icons/paper-plane-tilt.svg?v=cf6da608f8152f4de74530530d4b838dd46ece2c862838c35e3974db0db3397a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
