export const name="ear-slash-light";
export const id="dl_0e37337e2e254b949aba";
export const url=new URL("../icons/ear-slash-light.svg?v=eee42728cc72bc92124602fc95e270aad860fb66b9716e68c5ed9f90f09d83e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
