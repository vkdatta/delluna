export const name="x-square";
export const id="dl_b963e67fc0184794ac74";
export const url=new URL("../icons/X/x-square.svg?v=738a6a6dcf10763a9f9a0bfb85c8e16f994af9068ddbe3b98cd62b61dce652c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
