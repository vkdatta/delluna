export const name="waveform-slash-light";
export const id="dl_4e4172c3494f8abee222";
export const url=new URL("../icons/waveform-slash-light.svg?v=5d81b759b2ec07afaf490ff3b1fd05a3b25fa80b8eeeeeca74dd5de5ac1d9169",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
