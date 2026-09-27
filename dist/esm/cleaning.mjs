export const name="cleaning";
export const id="dl_ddeb0bad70e29c732308";
export const url=new URL("../icons/cleaning.svg?v=df96b087179ae2fbffca24aed9ec02443ba4c8c77b256e598b554721b873060e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
