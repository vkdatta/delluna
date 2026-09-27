export const name="photo_frame";
export const id="dl_c9a36e7701ef3cf928ab";
export const url=new URL("../icons/photo_frame.svg?v=9c10d29fd2953eb47a2a327e948adc990b9b776a9dad3a6dc5696d98740872d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
