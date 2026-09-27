export const name="directions_alt";
export const id="dl_fe1cd713c408141c784e";
export const url=new URL("../icons/directions_alt.svg?v=dfafee2ac7b752790fb2196e51edb72e11306ab064dedfec962352dd7b9eb20c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
