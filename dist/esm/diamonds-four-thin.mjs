export const name="diamonds-four-thin";
export const id="dl_3ea7d2eedc034c8e9f3d";
export const url=new URL("../icons/diamonds-four-thin.svg?v=7e788c0f33045d7ab071a92f15f3d3f8b768162ed0dc50b3a0e86aee9c57f3f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
