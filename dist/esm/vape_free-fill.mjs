export const name="vape_free-fill";
export const id="dl_c831b725c026e73e4e32";
export const url=new URL("../icons/vape_free-fill.svg?v=c5bf221993619b8c588e4429f952ea40931527068bd916a78bfa7e326de559cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
