export const name="lock-simple-light";
export const id="dl_a700acc0272f4c45a992";
export const url=new URL("../icons/lock-simple-light.svg?v=e93c36bbd56b588d4c119294b2c40c50cc6d7486255142be6640f555eb6ca826",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
