export const name="arrow-up-fill";
export const id="dl_1525ed7decd84f32a202";
export const url=new URL("../icons/arrow-up-fill.svg?v=195f32158277122f7efdd5e73e72a92a780f59c89ac428c7e3c9c636d9e22e92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
