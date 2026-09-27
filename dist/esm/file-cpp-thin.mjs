export const name="file-cpp-thin";
export const id="dl_2ee5a9219526438e952e";
export const url=new URL("../icons/file-cpp-thin.svg?v=0f44ac37519521c717b47994f9c4a276a7bfd880ef97b40d7a832db194a4b892",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
