export const name="popcorn-duotone";
export const id="dl_69eda44fe86c4a7dbb43";
export const url=new URL("../icons/popcorn-duotone.svg?v=a9c587fddb8293f9c3f0f1502fa9217e46850edeb4901358e4a4760e9b1b1d0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
