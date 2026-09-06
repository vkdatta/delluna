export const name="dot-outline-bold";
export const id="dl_430734145371400d8f9f";
export const url=new URL("../icons/dot-outline-bold.svg?v=0b338d92690a28bd6c93c3ca8f1be870d4add1c53e5664f08be0b6f0140cd48d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
