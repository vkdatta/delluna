export const name="cassette-tape-duotone";
export const id="dl_1d953e4eb4144d59852f";
export const url=new URL("../icons/cassette-tape-duotone.svg?v=db05a47b1e360a9331be8a5f1ce9bf8515aa691bfe390b85ce98ea56a355aa63",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
