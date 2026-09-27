export const name="swap_horizontal_circle";
export const id="dl_0b56d57bcc5f3c489017";
export const url=new URL("../icons/swap_horizontal_circle.svg?v=a4aee26d011611e8dffb17d33165fdfd53c6363cf3191984273f4b5f29cacf60",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
