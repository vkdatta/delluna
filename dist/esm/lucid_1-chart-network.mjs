export const name="lucid_1-chart-network";
export const id="dl_43366763d7754f32aa97";
export const url=new URL("../icons/lucid_1-chart-network.svg?v=b8efb71fbcbb4d4c69e003e34e05ea2afc7bd5915ec0003c832f9c7640da7823",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
