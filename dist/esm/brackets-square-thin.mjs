export const name="brackets-square-thin";
export const id="dl_50db609bd3274c46874b";
export const url=new URL("../icons/brackets-square-thin.svg?v=938e04ed39523e253be30dafd776374ad93dce96d143e3f14bf2129405b6e09e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
