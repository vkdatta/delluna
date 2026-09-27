export const name="arrow-left-thin";
export const id="dl_b5286af2efee43548611";
export const url=new URL("../icons/arrow-left-thin.svg?v=ff67feab5c50624f5805f25d119d69133bfa46ab4ac32053a06061ed20e61765",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
