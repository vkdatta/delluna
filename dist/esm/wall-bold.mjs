export const name="wall-bold";
export const id="dl_7089627b787f7e88d00f";
export const url=new URL("../icons/wall-bold.svg?v=2bead70218a0a89b474b6a65e914444db730092650c4aa604c1ab99b2cb0488a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
