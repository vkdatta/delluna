export const name="square_dot";
export const id="dl_21f65b87dc7344b19c3f";
export const url=new URL("../icons/S/square_dot.svg?v=bc77857a7def07f456183d9e8213a9d08bc80a6a6041b5d51047f6ac6248cfb5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
