export const name="rug-light";
export const id="dl_54e594140a244a4c94c4";
export const url=new URL("../icons/rug-light.svg?v=72edf6a51e5ff979688c74210e95759b8b2dfde0ff83ce1fd4d3a670de3be48b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
