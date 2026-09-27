export const name="square-dashed-text";
export const id="dl_582e9bdb113c40fea097";
export const url=new URL("../icons/square-dashed-text.svg?v=2df953598252c435cf417883bf1db6f882c8f90c9990b4b0e0f8c8d5dcd8f98b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
