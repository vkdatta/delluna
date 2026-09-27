export const name="sprint-fill";
export const id="dl_da42419379334616c44d";
export const url=new URL("../icons/sprint-fill.svg?v=39269841507060f3e9666ef3413d92b86a2a33347d340649cb8456e252f0355e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
