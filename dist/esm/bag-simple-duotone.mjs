export const name="bag-simple-duotone";
export const id="dl_9bb5f4ce08224750b3fd";
export const url=new URL("../icons/bag-simple-duotone.svg?v=ff300b93c94e46b08fba43cacce7ae3239c4ac5263c156f379674b4b5d765bb3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
