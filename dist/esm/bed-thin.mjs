export const name="bed-thin";
export const id="dl_d7d7fdd945b04c018569";
export const url=new URL("../icons/bed-thin.svg?v=1bbc2803464c0dc860757f67bad758873db0e2070a422446045873fdc56f49f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
