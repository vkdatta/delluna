export const name="person-simple-bold";
export const id="dl_8bbd38868a354506b229";
export const url=new URL("../icons/person-simple-bold.svg?v=76996b1570a2fb4df430ddc37492217290310a74d264e70508f070065eb46f9d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
