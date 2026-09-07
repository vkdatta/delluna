export const name="pencil-ruler-fill";
export const id="dl_40784b93aa984416a4db";
export const url=new URL("../icons/pencil-ruler-fill.svg?v=da9b5ce3789f980ffa0b95761f1618b50b231b95c4807fb7e643d0532ca59d3f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
