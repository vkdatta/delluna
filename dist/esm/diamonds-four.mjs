export const name="diamonds-four";
export const id="dl_60eece63a64d4f83889f";
export const url=new URL("../icons/diamonds-four.svg?v=d6918539ea7d4bf4d6e6808978d16a8132eb5e47314c0964663253b3e048ae00",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
