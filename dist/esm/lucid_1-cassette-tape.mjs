export const name="lucid_1-cassette-tape";
export const id="dl_48ccd81975a34b04afea";
export const url=new URL("../icons/lucid_1-cassette-tape.svg?v=f0ac32f37109c9c35510ebe74a26b899a3207ef25913009fa7a9278f83af09ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
