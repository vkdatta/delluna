export const name="stone";
export const id="dl_eec09a76f12344688ccc";
export const url=new URL("../icons/stone.svg?v=dc96a3cf8592a658637f2edbc385773e597faaad367eed7bd9e3344f8eec9eb2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
