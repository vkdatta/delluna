export const name="volcano";
export const id="dl_61e117021e7036038567";
export const url=new URL("../icons/volcano.svg?v=a85089216eb28a34d47728c7e08b9f425c607407b0e9e67718b67255e67fa5f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
