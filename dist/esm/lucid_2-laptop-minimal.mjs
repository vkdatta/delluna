export const name="lucid_2-laptop-minimal";
export const id="dl_8807b80286064ab9b160";
export const url=new URL("../icons/lucid_2-laptop-minimal.svg?v=cbd5e622076728862dc253a403d254f69472e434099cccd4406828c9fff4fde1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
