export const name="option-light";
export const id="dl_3a2611e0a95e4c6a9118";
export const url=new URL("../icons/option-light.svg?v=bf82bc0a99d3cc2b9d55c2e2eb9f519b586f978a623c75b48e44c445f75db8d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
