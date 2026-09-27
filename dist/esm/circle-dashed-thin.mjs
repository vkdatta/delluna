export const name="circle-dashed-thin";
export const id="dl_751f395f63e1419cb149";
export const url=new URL("../icons/circle-dashed-thin.svg?v=eada808f5e2e185277b3ae45cefacece04275f917ff5c96d75d8ce4160570d5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
