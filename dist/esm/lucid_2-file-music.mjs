export const name="lucid_2-file-music";
export const id="dl_f98d265c85da4c868a53";
export const url=new URL("../icons/lucid_2-file-music.svg?v=2164d4419caacdd66dbf7711b5f34d503251d2af15e807cba45c1a73de7194b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
