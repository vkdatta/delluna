export const name="biotech";
export const id="dl_edbb10aca28b422b3998";
export const url=new URL("../icons/biotech.svg?v=c126a4b9b174ffd49fe522c8ea98e76ca967b0da91fd61303d4965fe004b268b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
