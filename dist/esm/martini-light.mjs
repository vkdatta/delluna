export const name="martini-light";
export const id="dl_989b8e2df569494ba985";
export const url=new URL("../icons/martini-light.svg?v=b49dfcc3e5e832a6a1fd193c149c5d5f5c52e9a250131455fe9c09a60823f5a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
