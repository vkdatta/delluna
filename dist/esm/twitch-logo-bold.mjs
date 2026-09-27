export const name="twitch-logo-bold";
export const id="dl_3b9e3f3db3ddf5cca20b";
export const url=new URL("../icons/twitch-logo-bold.svg?v=72faa84e65e39e955b21f19e3e310ed9054a2e3554d0e17ab79c5869cb837f62",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
