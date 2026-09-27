export const name="wave-sawtooth-thin";
export const id="dl_5817ed5daf99a9aeac34";
export const url=new URL("../icons/wave-sawtooth-thin.svg?v=2b9744789e3273012aef8dbfc3c106b8452b20b338584dfa842c8d23c23e58e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
