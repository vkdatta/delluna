export const name="keyboard_double_arrow_up";
export const id="dl_01158aff499ed200761f";
export const url=new URL("../icons/keyboard_double_arrow_up.svg?v=356c7753e7e9fd759338281b38264ef8fdd6485e0fdd11761f4fb2ce1b05fe9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
