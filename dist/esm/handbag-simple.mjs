export const name="handbag-simple";
export const id="dl_e5d92db3ca964f91b521";
export const url=new URL("../icons/handbag-simple.svg?v=8f061a8daf75d3ed3c73ca7ab436ade275be3d3c6a1d7c5ea47b4b5711157401",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
