export const name="cassette-tape-thin";
export const id="dl_9d90832032684d69bdf7";
export const url=new URL("../icons/cassette-tape-thin.svg?v=b935a4ae6cdfafcc637f6e28a63c0987a949c2d08c74ceb2b9397adc0686c2f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
