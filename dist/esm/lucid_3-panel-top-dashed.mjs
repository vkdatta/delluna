export const name="lucid_3-panel-top-dashed";
export const id="dl_43f0b19198524b74b95b";
export const url=new URL("../icons/lucid_3-panel-top-dashed.svg?v=cc0e8b6f4d059d42d9cb5146b9463f420adc6e982e7011af5031685732b80b8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
