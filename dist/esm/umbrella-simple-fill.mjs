export const name="umbrella-simple-fill";
export const id="dl_4167f40e5cd019bfcea1";
export const url=new URL("../icons/umbrella-simple-fill.svg?v=ceb53219ed072142cb24e9b82dfba70e6f067e02379bb8b1150d3180ac8a5988",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
