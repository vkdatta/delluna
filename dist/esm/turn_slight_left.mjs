export const name="turn_slight_left";
export const id="dl_dfad6dd9bc7aed7a95bd";
export const url=new URL("../icons/turn_slight_left.svg?v=5e11d9f524962d7dcd7111c85ea8e27e59e3d578ff206ecca00d0409dd21f6bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
