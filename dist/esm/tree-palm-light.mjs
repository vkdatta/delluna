export const name="tree-palm-light";
export const id="dl_272b031e6ae34900a4dc";
export const url=new URL("../icons/T/tree-palm-light.svg?v=fbfd99f5b5f2e0404220d22140058bc55061bfbc1d7f75e531bd7fcc5c89b2de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
