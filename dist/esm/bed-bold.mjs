export const name="bed-bold";
export const id="dl_d8187d7e7f4b486ca2a7";
export const url=new URL("../icons/bed-bold.svg?v=34b93f6cd3eee81a15abb8cd9dab1cac0972217984f20241a95e8e88b8547fd5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
