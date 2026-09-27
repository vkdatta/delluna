export const name="star";
export const id="dl_3eea1d58292990eebbc6";
export const url=new URL("../icons/star.svg?v=c3abba1879c2d013ae436665dab70219b69e06050867705d93ab91e41e921d67",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
