export const name="projector-screen";
export const id="dl_1d879513a22541ffad44";
export const url=new URL("../icons/projector-screen.svg?v=0707045545f3678cc69036e55a155909c91d7b5c5d9b665c74b86df603d90c8f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
