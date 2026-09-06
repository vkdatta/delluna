export const name="mouse-left-click-thin";
export const id="dl_edafe8cd746b41558644";
export const url=new URL("../icons/mouse-left-click-thin.svg?v=f6e0c5c2dec9dc1556b965da4bb95954f568232e2abb53e93e9b6524d8c933eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
