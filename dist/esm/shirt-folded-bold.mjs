export const name="shirt-folded-bold";
export const id="dl_61de87e54b8846bb8b4a";
export const url=new URL("../icons/S/shirt-folded-bold.svg?v=91c0f9668e5af3cc840ec8ad95ad3e6c2341591b6070dde5a98eb8b26f435251",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
