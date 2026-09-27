export const name="share-bold";
export const id="dl_b44bb329fa8c0a0a96c2";
export const url=new URL("../icons/share-bold.svg?v=d018ff40b3d416b6f6c60c0ac8352e701d3f099d7c96c1055cc618a86109c9e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
