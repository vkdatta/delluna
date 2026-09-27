export const name="split-vertical-bold";
export const id="dl_fee08e09fec4c9be152d";
export const url=new URL("../icons/split-vertical-bold.svg?v=a73d9aaf1406a0ec37094b3a71add26e28cb2474c42419cc70b61a83bb83ad06",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
