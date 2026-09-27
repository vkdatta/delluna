export const name="goggles-duotone";
export const id="dl_ffec382b887b4ce99695";
export const url=new URL("../icons/goggles-duotone.svg?v=c9c15ad28956f0e93fe819bb8ac546512ae2bc89bce91b7e2782c38876b13466",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
