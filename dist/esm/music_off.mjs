export const name="music_off";
export const id="dl_a658812ebcca424cb16f";
export const url=new URL("../icons/music_off.svg?v=e5b9dd583ed012249603285afaa4c909f825a1a34217c97cd08cdd89b857d113",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
