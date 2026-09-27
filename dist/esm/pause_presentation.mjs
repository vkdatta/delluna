export const name="pause_presentation";
export const id="dl_466690fb28a2bf36fd13";
export const url=new URL("../icons/pause_presentation.svg?v=9a2e1029749da0ecab03195e76c6b0a99d1112cc567f869d10488284172b6fcf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
