export const name="tally-5";
export const id="dl_8d99c949c39e4af6b4b6";
export const url=new URL("../icons/tally-5.svg?v=d1a05e3c5a195c718d763372c18ca9afea9a09d9db246937f4eee4879389271c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
