export const name="trolley-bold";
export const id="dl_404972ef9cff4bd89cdc";
export const url=new URL("../icons/T/trolley-bold.svg?v=fdaa23249757acae8f8b5faa95ea2795845dae237cff6c9382bdcaefb07cd15f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
