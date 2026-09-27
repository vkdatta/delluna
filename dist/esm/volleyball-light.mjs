export const name="volleyball-light";
export const id="dl_6f8f5546bbd9b7d01e37";
export const url=new URL("../icons/volleyball-light.svg?v=17cad57028e6c7fe5de8d7d29bc4d45a275c51c8bcb0ddb7e2ad988198998495",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
