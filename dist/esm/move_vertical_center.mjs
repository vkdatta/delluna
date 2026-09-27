export const name="move_vertical_center";
export const id="dl_8d17c5b4f8a9a8c15806";
export const url=new URL("../icons/move_vertical_center.svg?v=acc7b6a3a36f75a1db416c2e8de71a4235b2ceb4154d7a27c8cd70067fe0ea15",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
