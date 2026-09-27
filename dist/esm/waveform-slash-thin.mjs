export const name="waveform-slash-thin";
export const id="dl_413c96d93b293ec6725b";
export const url=new URL("../icons/waveform-slash-thin.svg?v=b9740d4d2d4408fdd2057778e66175745c1803d83d9c1d36249854d571cfcf5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
