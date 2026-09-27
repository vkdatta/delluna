export const name="multicooker";
export const id="dl_41e7dd0172f3b36cc381";
export const url=new URL("../icons/multicooker.svg?v=03e72f1c988e86d1d956efeffe8bf9263679d0e20e2cefc32a06698f7b9d242b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
