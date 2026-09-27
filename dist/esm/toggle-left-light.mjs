export const name="toggle-left-light";
export const id="dl_cc2dce705b86a67754df";
export const url=new URL("../icons/toggle-left-light.svg?v=ca66f3c9c5d7bddc4f4961ce560798ab25a5f123cd7650c51f7831f90b58eb55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
