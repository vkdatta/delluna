export const name="microphone-slash-light";
export const id="dl_e594227ccb014c3bb246";
export const url=new URL("../icons/microphone-slash-light.svg?v=501635a9fb7a187b584d6cc56eeea3c709adfbaef7d1fa35e145c5cf50c33352",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
