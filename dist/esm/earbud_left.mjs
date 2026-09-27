export const name="earbud_left";
export const id="dl_4943a2dd776a09fe0131";
export const url=new URL("../icons/earbud_left.svg?v=cd4f1b586cece2316900af0d916b745cf7296db6b45599f129224de9676b8941",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
