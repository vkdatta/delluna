export const name="exercise";
export const id="dl_7a1ea3852c613e2e6a77";
export const url=new URL("../icons/exercise.svg?v=91d27c5a1253d08b125bf972838df729bcf633ab4501db68808aef90475a7876",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
