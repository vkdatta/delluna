export const name="treasure-chest";
export const id="dl_1f0e81b49b0e69244de2";
export const url=new URL("../icons/treasure-chest.svg?v=c53a5a64442ed4ef5087445ffe60cd5c57d5a216562e6d446ce956d2c610cf20",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
