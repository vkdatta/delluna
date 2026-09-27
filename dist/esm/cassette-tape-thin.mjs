export const name="cassette-tape-thin";
export const id="dl_9d90832032684d69bdf7";
export const url=new URL("../icons/cassette-tape-thin.svg?v=c212104264180ffa2ad8477eac93007d6b4d2ecf0dc91c065593e88c1cf094f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
