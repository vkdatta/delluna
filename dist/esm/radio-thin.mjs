export const name="radio-thin";
export const id="dl_f01912c3e3b649e58429";
export const url=new URL("../icons/radio-thin.svg?v=ebe88031c99a530af19c3aba4306d20097baf3283c84cf48a3837b9633f756d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
