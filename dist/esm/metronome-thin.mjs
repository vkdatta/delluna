export const name="metronome-thin";
export const id="dl_2e7b9d69fbec45818e0b";
export const url=new URL("../icons/metronome-thin.svg?v=bb46e97b3f779b9611447253e26fc6e940e0f8219c00dd510ccb4ad5f3114602",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
