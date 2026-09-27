export const name="dots-six-duotone";
export const id="dl_ace7819513da4a28913c";
export const url=new URL("../icons/dots-six-duotone.svg?v=41fe884806e5ca5b4ef7b595df779f966b2528cdcda816820696dfdef73c66bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
