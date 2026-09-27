export const name="not-subset-of-light";
export const id="dl_39eced04b95c48eba82a";
export const url=new URL("../icons/not-subset-of-light.svg?v=caa7d645ca02ac00abda63c142fce2c62987ace0b93edcd22a672dcf327f456a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
