export const name="keyboard_backspace-fill";
export const id="dl_fb7b8c7ba07c6331349b";
export const url=new URL("../icons/keyboard_backspace-fill.svg?v=65c120e02e53cdf37e7b5c80d3b4239fbcb9f90b9e05fa80c2995210f33660c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
