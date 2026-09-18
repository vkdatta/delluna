export const name="genres";
export const id="dl_1f4d3e572a9745ad9631";
export const url=new URL("../icons/G/genres.svg?v=ed07aa6e9594285c842ca65cad1fbfaa96ac892e56991a33abf19e5fa309b50a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
