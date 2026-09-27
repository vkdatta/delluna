export const name="lucid_3-monitor-cog";
export const id="dl_b1bd943b15d04bc1b212";
export const url=new URL("../icons/lucid_3-monitor-cog.svg?v=24f274ee5e79e316d70e43ed1bcbc4a48fa544efa9e5709d6a1c5f50048afd81",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
