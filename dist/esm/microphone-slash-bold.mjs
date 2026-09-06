export const name="microphone-slash-bold";
export const id="dl_66400184260b4bf099e2";
export const url=new URL("../icons/microphone-slash-bold.svg?v=6a5eda3a51e3d2abfa198f6487248ad8dd54122fc0cb700cc53e4469322abb41",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
