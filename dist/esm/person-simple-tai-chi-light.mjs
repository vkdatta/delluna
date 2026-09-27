export const name="person-simple-tai-chi-light";
export const id="dl_3a1343a127c44236a7a4";
export const url=new URL("../icons/person-simple-tai-chi-light.svg?v=b5ad1d30650b9a48192b7824484e84ac552770cf289db25bf938fb1cf86f0fd5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
