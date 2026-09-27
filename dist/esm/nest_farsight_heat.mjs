export const name="nest_farsight_heat";
export const id="dl_9e4033c583a7acea41e2";
export const url=new URL("../icons/nest_farsight_heat.svg?v=95929394fe0f98108aa72b0c681e91cd950a9fb8f72d97662c852ffc4a61d9ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
