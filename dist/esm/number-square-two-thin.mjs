export const name="number-square-two-thin";
export const id="dl_2a0852e20da641c9a7c9";
export const url=new URL("../icons/number-square-two-thin.svg?v=763ec07db34d3a8a7fc07dce821b068d343da7b56479995e9d3c74a1dfdacb11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
