export const name="night_sight_max-fill";
export const id="dl_dff22804bbdf4e19b627";
export const url=new URL("../icons/night_sight_max-fill.svg?v=fe26530adc69f427ef632c4a0db51849edb096f0c40f133818fd284ba5689503",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
