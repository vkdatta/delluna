export const name="bed-thin";
export const id="dl_d7d7fdd945b04c018569";
export const url=new URL("../icons/bed-thin.svg?v=938b828968e9c7d0d0f7036a174a8f42f1720887a2cdd5621bb7b612db5e75cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
