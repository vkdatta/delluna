export const name="github-logo-duotone";
export const id="dl_afde04b2b0b14a19a1d6";
export const url=new URL("../icons/github-logo-duotone.svg?v=27fbb2cce1a92b5c4eede489a9832dd505516737316b41a215c2bb0679ce58fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
