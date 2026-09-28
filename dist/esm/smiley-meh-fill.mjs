export const name="smiley-meh-fill";
export const id="dl_ce3d27b9564c6dc65c4d";
export const url=new URL("../icons/smiley-meh-fill.svg?v=0d383b08fec00ade3e4baf926de8fa99a760dd9df02da777c709cbc58f8a9fdb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
