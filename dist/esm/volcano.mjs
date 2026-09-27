export const name="volcano";
export const id="dl_0844742e4e5ea8d7493c";
export const url=new URL("../icons/volcano.svg?v=9335756b70d90bfdd3a6989a009a64996b7cbe538216219433c80f5830c49897",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
