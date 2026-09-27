export const name="castle-fill";
export const id="dl_feab866e0fb7449d4a2c";
export const url=new URL("../icons/castle-fill.svg?v=b87b02117a18d249bf5187966de542bfc3b540eaa970922183e940d9abb32bbd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
