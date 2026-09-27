export const name="library_music";
export const id="dl_e49201414513be75111b";
export const url=new URL("../icons/library_music.svg?v=0637182482c631b345cd221cf2cf710efb403a052815612e0b82f5069adc5fed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
