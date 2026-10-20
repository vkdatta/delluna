export const name="docbase";
export const id="dl_b4f3e103d189439f9f74";
export const url=new URL("../icons/icons-svg/docbase.svg?v=e6d2718b802361b6a6a41e6cb6a8171719481da51d0fa83156489c452281e0c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
