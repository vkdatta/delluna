export const name="square-scissors";
export const id="dl_a1baf5e0482b4d0c85d0";
export const url=new URL("../icons/square-scissors.svg?v=3100a3a75fb8c113b649d3e67e5b749bc081f385d350066a9457518ba48f0a46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
