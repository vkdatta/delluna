export const name="microphone-slash-light";
export const id="dl_e594227ccb014c3bb246";
export const url=new URL("../icons/microphone-slash-light.svg?v=d98d176ce4b4181f3f49faea4d4eea598582a3bcefd6c33baf2ebabdd91c1a8c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
