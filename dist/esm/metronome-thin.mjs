export const name="metronome-thin";
export const id="dl_2e7b9d69fbec45818e0b";
export const url=new URL("../icons/metronome-thin.svg?v=397b894e708bec01e51502b271014d7bd02452b9221106c806c2f0423291b5bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
