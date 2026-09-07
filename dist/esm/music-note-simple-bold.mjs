export const name="music-note-simple-bold";
export const id="dl_ea1b2aa8ef2745e5b1db";
export const url=new URL("../icons/music-note-simple-bold.svg?v=d94e5fb8f1141e28551989e0e71d694dfaf411c66fe369f41ea3de3336f1668a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
