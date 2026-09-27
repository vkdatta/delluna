export const name="key_visualizer-fill";
export const id="dl_430220576b4ec6e3ac6e";
export const url=new URL("../icons/key_visualizer-fill.svg?v=b0af7704125c7c5a220e846b308b24aff7849205eb09140f1a1b6deb5a42f485",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
