export const name="lucid_2-file-plus-corner";
export const id="dl_59a1d3ff2e3047b39869";
export const url=new URL("../icons/lucid_2-file-plus-corner.svg?v=d864ccb4dac2b78d5067f280c26f3377d06968685a603a45c912be30a92d0def",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
