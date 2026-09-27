export const name="cloud-arrow-up-bold";
export const id="dl_14338833387e4d7aa0a6";
export const url=new URL("../icons/cloud-arrow-up-bold.svg?v=3cf595863de8d72397bbe8fa0ad167ead8314383a24e02cf52247d369f8b3c3f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
