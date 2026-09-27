export const name="agender-fill";
export const id="dl_6d988ba6db7ca0154513";
export const url=new URL("../icons/agender-fill.svg?v=25cedda0f923cf91487bb7161c232397a74435c3545298c4279cc3c26499bb15",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
