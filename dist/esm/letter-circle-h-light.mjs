export const name="letter-circle-h-light";
export const id="dl_f51d4b8fb0034c7a9ecd";
export const url=new URL("../icons/letter-circle-h-light.svg?v=35e0bc765ef1f3e34c72e80342c8e6f1c8e43e41e78f4a338deaab5635249abc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
