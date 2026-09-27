export const name="moon-stars-thin";
export const id="dl_77a6d25b39554ed0b2cd";
export const url=new URL("../icons/moon-stars-thin.svg?v=b400c5089ee69f3dcd891dc960342301e3cdbf106e6c067a5993667af1f4b880",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
