export const name="gpp_bad-fill";
export const id="dl_2668dc748b984d8b916f";
export const url=new URL("../icons/gpp_bad-fill.svg?v=3250cf16edcf816d4020785afa5025604ec8ef47a5f7795d7396b37af95856f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
