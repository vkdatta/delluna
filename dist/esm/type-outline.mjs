export const name="type-outline";
export const id="dl_6205dd096ea84f9b88cd";
export const url=new URL("../icons/type-outline.svg?v=b9526bbfbe7d830ceeb3a5fa87d3b194ff7b9874a704f0e8895dab2dbc714de4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
