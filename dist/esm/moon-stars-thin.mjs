export const name="moon-stars-thin";
export const id="dl_77a6d25b39554ed0b2cd";
export const url=new URL("../icons/moon-stars-thin.svg?v=5dd459efd0e461475e41e57a53ddac9b34926d46d1d5345fbd47c522d07b6be1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
