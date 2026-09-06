export const name="music-notes-fill";
export const id="dl_54969aedc3e74035ae13";
export const url=new URL("../icons/music-notes-fill.svg?v=ddfa03bf39856870a4898b830525136583179dc019aa0ab8689eb5b7a65bc50d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
