export const name="add_location";
export const id="dl_8f5f36dfb155459d981a";
export const url=new URL("../icons/add_location.svg?v=9b6321cf65fc6bf1ba0fa53979d885ca5a6e0fca29722e58f69f02f27eb3e2b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
