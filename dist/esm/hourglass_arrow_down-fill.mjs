export const name="hourglass_arrow_down-fill";
export const id="dl_316c0c1d58f65d0e9d04";
export const url=new URL("../icons/hourglass_arrow_down-fill.svg?v=bb3b7c20942b8ff35733f077d9b5291044014a05c08d2e589d0bb8fd611baf78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
