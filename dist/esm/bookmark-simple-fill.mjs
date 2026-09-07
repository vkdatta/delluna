export const name="bookmark-simple-fill";
export const id="dl_0e9fecd77f6e4d2e9af2";
export const url=new URL("../icons/bookmark-simple-fill.svg?v=379dfd32059dc79b50e9e51a92ff94e028f0325262a985ad8136b0d4c661db65",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
