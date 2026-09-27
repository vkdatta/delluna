export const name="keyboard_tab-fill";
export const id="dl_008c800c29e81e840aaa";
export const url=new URL("../icons/keyboard_tab-fill.svg?v=18004235139d807b1efc3f462ee9b59ef22b764d90467c604d10d8c5b3c7033a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
