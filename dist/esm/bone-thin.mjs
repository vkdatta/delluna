export const name="bone-thin";
export const id="dl_36c188d7ccae4f18ad98";
export const url=new URL("../icons/bone-thin.svg?v=320d4e05f94a99df6081a7e29b518296e530146ef44d98f73a73f15dd7a5a16a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
