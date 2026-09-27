export const name="speaker_phone-fill";
export const id="dl_dac72d496ca3bbe59ada";
export const url=new URL("../icons/speaker_phone-fill.svg?v=26db9d2f723fd44e09b578f31385d570ae49c18c31ac193c043e7913594fdd27",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
