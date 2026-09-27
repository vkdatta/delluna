export const name="battery-plus-bold";
export const id="dl_cc0eedf384c54d8789d0";
export const url=new URL("../icons/battery-plus-bold.svg?v=57c41c6881f1f51b50be15f8a7e978d4af22ed3e3cf153b0db743c9b6c288c92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
