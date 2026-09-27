export const name="number-square-six-bold";
export const id="dl_52ba211dff7a433a93b6";
export const url=new URL("../icons/number-square-six-bold.svg?v=d77f8a70304cbd6e19f13691a46a2704b26711cf8ce082bfdbeb2efd567cfdf3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
