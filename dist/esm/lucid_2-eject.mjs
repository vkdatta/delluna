export const name="lucid_2-eject";
export const id="dl_44026a552c034924a409";
export const url=new URL("../icons/lucid_2-eject.svg?v=7ecc4f668de5f833a19bfe85ea2f38d9fa174a3eab7ad3727df97b507e35249a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
