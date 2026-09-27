export const name="caret-circle-double-down-light";
export const id="dl_79a0bb0e07e04c798ab2";
export const url=new URL("../icons/caret-circle-double-down-light.svg?v=050b8a07f01025f23088f6fa8a64fadb1655d6c75e6b334b31e5156575ea9226",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
