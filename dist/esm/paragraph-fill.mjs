export const name="paragraph-fill";
export const id="dl_074c682d0a0041e79f5b";
export const url=new URL("../icons/paragraph-fill.svg?v=dc119a1aca1b51ed354cb395309ba3d3dd6ef7400afaf1acb9c6389967a16f96",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
