export const name="spotify-logo-light";
export const id="dl_47b8a99c5f2b47e0a0c8";
export const url=new URL("../icons/S/spotify-logo-light.svg?v=902970c9959502bbc3cc1decbaa17d646f5111fc339bebaaa6a63876d7b8b650",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
