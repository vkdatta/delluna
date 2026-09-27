export const name="television-light";
export const id="dl_daa6ee73f37db6fd1c44";
export const url=new URL("../icons/television-light.svg?v=81ef9c18c6c0d032006ea0f56be0c8c9b3cb670c242825d74af444f33a49a287",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
