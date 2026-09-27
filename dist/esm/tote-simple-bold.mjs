export const name="tote-simple-bold";
export const id="dl_20045c1d7928d7556d75";
export const url=new URL("../icons/tote-simple-bold.svg?v=06fad5f96131371ebd1ddd9574f0ee6f2a30fba37572e3a30bd455e95e595af3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
