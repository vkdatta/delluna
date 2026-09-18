export const name="downhill_skiing-fill";
export const id="dl_4386edfed5e54a13baa0";
export const url=new URL("../icons/downhill_skiing-fill.svg?v=7f9c23d431612bab6ea73de20c8a02f6fd560cb9e77e54c77c3eabd7d9ab35c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
