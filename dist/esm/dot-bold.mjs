export const name="dot-bold";
export const id="dl_bbc10d4b25544718852b";
export const url=new URL("../icons/dot-bold.svg?v=aa7b7e3cd8e253071e8beb5bbbc6c7c73a4499f8aadf16b85b459b815618be7e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
