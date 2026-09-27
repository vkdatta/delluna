export const name="cassette-tape-duotone";
export const id="dl_1d953e4eb4144d59852f";
export const url=new URL("../icons/cassette-tape-duotone.svg?v=e127165238c250df1b9a84cd530472982073e331e65708769ee394bdf0385b9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
