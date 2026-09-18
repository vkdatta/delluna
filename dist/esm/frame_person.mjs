export const name="frame_person";
export const id="dl_f3937173cea7492586ad";
export const url=new URL("../icons/frame_person.svg?v=c00e68d50fc9c78bd2697f7b69740f1dd59b8c9a6dbe657721ba51332686a367",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
