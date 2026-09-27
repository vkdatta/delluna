export const name="lucid_2-heart";
export const id="dl_33e12c3fd90146d0b7e3";
export const url=new URL("../icons/lucid_2-heart.svg?v=e4da14c0222d234b3915c7afa4185c14a1e8eda5360d4d5a5fc7697718c9177a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
