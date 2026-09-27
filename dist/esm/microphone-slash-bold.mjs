export const name="microphone-slash-bold";
export const id="dl_66400184260b4bf099e2";
export const url=new URL("../icons/microphone-slash-bold.svg?v=51ebc5ac17d49b58ca945cd7aa05728886853c2b2844972c3da33cf5d490b47b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
