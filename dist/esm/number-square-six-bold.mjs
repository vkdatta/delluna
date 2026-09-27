export const name="number-square-six-bold";
export const id="dl_52ba211dff7a433a93b6";
export const url=new URL("../icons/number-square-six-bold.svg?v=ad7b06246ad9560059d42c9ce081ae84d9be98f3a1103b9d39a4bf8bc5618813",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
