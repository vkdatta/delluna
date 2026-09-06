export const name="playlist-thin";
export const id="dl_2d66cafa3b944ad58e2e";
export const url=new URL("../icons/playlist-thin.svg?v=ba4c69c2eb02fc7069c1f6af39ea28b3416d174ab978ba409196d35b6744eb69",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
