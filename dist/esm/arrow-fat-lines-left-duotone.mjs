export const name="arrow-fat-lines-left-duotone";
export const id="dl_638df5c0b0794133b04c";
export const url=new URL("../icons/arrow-fat-lines-left-duotone.svg?v=d4593f25ac181a2f34efc443c4c89ba331e4b0a1e1010ccee90ac6ecc7a5931f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
