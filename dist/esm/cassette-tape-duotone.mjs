export const name="cassette-tape-duotone";
export const id="dl_1d953e4eb4144d59852f";
export const url=new URL("../icons/cassette-tape-duotone.svg?v=f49ab6244cfba4d567dc5db4c6d309de16cf09e1b75c8584324963699a7e7ad4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
