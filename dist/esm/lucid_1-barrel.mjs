export const name="lucid_1-barrel";
export const id="dl_d795478f848b4242bef5";
export const url=new URL("../icons/lucid_1-barrel.svg?v=dfa2df5943502e34b10a4fdf5d3eece58a1fe9fba41ef69cdfbb4cb36431aa53",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
