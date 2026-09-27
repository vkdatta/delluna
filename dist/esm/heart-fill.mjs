export const name="heart-fill";
export const id="dl_1037e181091d4a13923a";
export const url=new URL("../icons/heart-fill.svg?v=9c39751a028ce732b4c8357a31dc183efbfceba20e80f7acf3ae1b5a3c7b56c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
