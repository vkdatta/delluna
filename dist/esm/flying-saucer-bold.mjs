export const name="flying-saucer-bold";
export const id="dl_21f3e9b330084cebab3a";
export const url=new URL("../icons/flying-saucer-bold.svg?v=49a8e300311e3e7a11202ae08373b2a7e4c6368793dd257adde4fa61946c2307",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
