export const name="trackpad_input_2-fill";
export const id="dl_7782848e205658fdcdaa";
export const url=new URL("../icons/trackpad_input_2-fill.svg?v=f4f3093a83fd7d5bed6c7942e338f1e9dfa3560e01c04f6af3cc0dbe610bc28c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
