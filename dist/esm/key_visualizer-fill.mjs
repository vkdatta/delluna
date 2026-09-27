export const name="key_visualizer-fill";
export const id="dl_750bf25de972b7712a27";
export const url=new URL("../icons/key_visualizer-fill.svg?v=4bf6c4daed17a19cd5302ff59bd9d706f4b22c309d0fecc9f97c40c6680e6e74",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
