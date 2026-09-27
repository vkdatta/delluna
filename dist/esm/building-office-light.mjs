export const name="building-office-light";
export const id="dl_36fa9e2cb0c84667aa4e";
export const url=new URL("../icons/building-office-light.svg?v=3d89a776e5de1312a0ba7be489d5b919b0d5ed8ca75e2bef848c3b6cbaeecd90",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
