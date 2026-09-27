export const name="respiratory_rate-fill";
export const id="dl_fe07a1bb69fc930f5fe1";
export const url=new URL("../icons/respiratory_rate-fill.svg?v=830af7f1837cb46a2a005226edca1eb4b24131ad652d2bf9e565cd5cedc34e86",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
