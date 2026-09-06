export const name="cell-signal-full-light";
export const id="dl_e34ae881cdce4a108fd1";
export const url=new URL("../icons/cell-signal-full-light.svg?v=97cd84bb560ea6af955dcfb4fd1ed7ac70f8bfeca1b6ab612a66b7b8c1c7f062",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
