export const name="frame_person_mic";
export const id="dl_9300954fe84547a9adc5";
export const url=new URL("../icons/frame_person_mic.svg?v=2e268f6cc28b1de2949ec8243d488fb1cd37c6d3fabfa1d05ec795675c4bd5ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
