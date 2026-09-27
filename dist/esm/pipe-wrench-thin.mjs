export const name="pipe-wrench-thin";
export const id="dl_4e0e81eb13984d3384b5";
export const url=new URL("../icons/pipe-wrench-thin.svg?v=a8ddd01fd2410a41465fb46b62cc78d9e5fe1cec283bf49c366e0ecc9727288e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
