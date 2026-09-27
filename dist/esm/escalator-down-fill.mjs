export const name="escalator-down-fill";
export const id="dl_182845e62f284bcdb36f";
export const url=new URL("../icons/escalator-down-fill.svg?v=c2c7538f9319fe31459ee78424ad0916c1cd9677d57891d20e9187e36eb9459e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
