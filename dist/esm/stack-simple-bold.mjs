export const name="stack-simple-bold";
export const id="dl_caf8de7a9cdde3dfa2e4";
export const url=new URL("../icons/stack-simple-bold.svg?v=7c853ee2228b38184635b8e246fe8864c9605cbee67dbf44d18af1a41736540b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
