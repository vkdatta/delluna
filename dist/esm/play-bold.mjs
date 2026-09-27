export const name="play-bold";
export const id="dl_fbaeb0c4a1c24d7b9e1f";
export const url=new URL("../icons/play-bold.svg?v=d3ab88239123838f7e8c126c209fdf1074ae7b81dcea564e8dcf308aeb29afad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
