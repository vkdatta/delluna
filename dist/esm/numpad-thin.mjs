export const name="numpad-thin";
export const id="dl_5069f2ecfd594b70a5ad";
export const url=new URL("../icons/numpad-thin.svg?v=5975b2341612093e5131632145518c3c5e212c75bde9381ef0ebbc68fa36e96b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
