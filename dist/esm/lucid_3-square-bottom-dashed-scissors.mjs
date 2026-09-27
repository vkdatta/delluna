export const name="lucid_3-square-bottom-dashed-scissors";
export const id="dl_4d58fcc0faea4eddb4f7";
export const url=new URL("../icons/lucid_3-square-bottom-dashed-scissors.svg?v=a7e85d8fbd31db8387377c2527b5f7024cf81cb4661fda3405c83835d7a2cfa9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
