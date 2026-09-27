export const name="tractor-thin";
export const id="dl_027a56405b42f454bb48";
export const url=new URL("../icons/tractor-thin.svg?v=074f3f6526fc2f23272e908be1eaecd93fed55b79370e1c279e5bf14e196e3d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
