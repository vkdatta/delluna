export const name="sticky-note-x";
export const id="dl_7d2d004963a049dbb7e4";
export const url=new URL("../icons/sticky-note-x.svg?v=ad5e6c4e512c3e5a2ee565a55af910f1f215f1419c972c4afa1e8f579a36041e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
