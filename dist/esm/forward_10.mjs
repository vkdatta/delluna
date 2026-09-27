export const name="forward_10";
export const id="dl_42ae23cb4ce38a539cb4";
export const url=new URL("../icons/forward_10.svg?v=4c271a9e1cae264ac9b0bfbd8381b38b0e7720f723358c6c18a28ed8f171a329",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
