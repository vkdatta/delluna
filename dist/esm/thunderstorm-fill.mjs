export const name="thunderstorm-fill";
export const id="dl_dec30752dcd85c39c95f";
export const url=new URL("../icons/thunderstorm-fill.svg?v=2884b74d7cab3f93c854443f2983bdd0c0141023cbb80c87131b64a05b1e89e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
