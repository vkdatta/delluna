export const name="not-equals";
export const id="dl_18f7df8e480f4a86b2a7";
export const url=new URL("../icons/not-equals.svg?v=0c1317df1c5d16d35ebae708f0db3f8af4fb3ac8dbc6f46daccada4736ec9c67",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
