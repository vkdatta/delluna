export const name="amp_stories-fill";
export const id="dl_e79a8d96fa0fc509b55c";
export const url=new URL("../icons/amp_stories-fill.svg?v=d9ad36a693722ef7c093f670ac64bf7a040ddc3f1acb1c3c9bdee95d81beb91f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
