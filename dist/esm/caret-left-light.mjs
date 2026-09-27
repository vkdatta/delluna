export const name="caret-left-light";
export const id="dl_b3d71319528441c9aaa3";
export const url=new URL("../icons/caret-left-light.svg?v=e09f8c7b00562d5ab3c39eafc190aedbb69ef0983246a1cc4a6e4358b73b4a7e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
