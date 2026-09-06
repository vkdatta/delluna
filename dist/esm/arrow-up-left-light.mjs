export const name="arrow-up-left-light";
export const id="dl_8a9eaaa80f454e5aa75c";
export const url=new URL("../icons/arrow-up-left-light.svg?v=3cddbc03a6ee274c006daf00cc4684cd1f980659c907f5411c7808f06177ad31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
