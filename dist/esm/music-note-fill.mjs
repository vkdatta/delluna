export const name="music-note-fill";
export const id="dl_cc74d46ff07d43a59dd4";
export const url=new URL("../icons/music-note-fill.svg?v=389d6ef434ff1b488c9c67c882c41f701abd15fa07d46d4fa708cf28ab93850b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
