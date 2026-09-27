export const name="no_sound";
export const id="dl_6ee870e823d65f52160d";
export const url=new URL("../icons/no_sound.svg?v=7d8279d09f8cebccf6b832da1975d6611577b4349c2d31606c570354a9eb3c5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
