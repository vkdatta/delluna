export const name="goodreads-logo-thin";
export const id="dl_79c04c8d4e7844bbb2b1";
export const url=new URL("../icons/goodreads-logo-thin.svg?v=14f913a2756b7cde3201b7d7504d605183f3b5b4ba84fb45cbc6beb5e0176624",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
