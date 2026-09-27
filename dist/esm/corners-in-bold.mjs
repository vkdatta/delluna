export const name="corners-in-bold";
export const id="dl_1922384c686641179220";
export const url=new URL("../icons/corners-in-bold.svg?v=5af748cb7f130ab44304c530b793fd790afef16ecdb9a2f87b18a176d2e7daff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
