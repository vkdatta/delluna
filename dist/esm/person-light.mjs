export const name="person-light";
export const id="dl_e43ae329789545b39a43";
export const url=new URL("../icons/person-light.svg?v=0d4b257413d58715e201b861f9c098b464da9ef8a89d03d4219a90f46e3e55cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
