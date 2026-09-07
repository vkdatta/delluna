export const name="hand-heart-light";
export const id="dl_0315de405f7842029873";
export const url=new URL("../icons/hand-heart-light.svg?v=e82b1051e6dd96a2786134d1a839cc176d475e87f031641599afbf0dc32afb8b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
