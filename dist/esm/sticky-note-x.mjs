export const name="sticky-note-x";
export const id="dl_7d2d004963a049dbb7e4";
export const url=new URL("../icons/sticky-note-x.svg?v=6242d0aa258260a28ee8c550b6dc6b166bdb85de6537a8e75e13943c95dc4966",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
