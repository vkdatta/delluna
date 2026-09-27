export const name="compass-tool-thin";
export const id="dl_173cac8b07c34aa0a0e8";
export const url=new URL("../icons/compass-tool-thin.svg?v=ed34f23b1006992302d38213f61883356e4a6f9f31233a6fac2ad845136e3de3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
