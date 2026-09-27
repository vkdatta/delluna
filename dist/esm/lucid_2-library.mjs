export const name="lucid_2-library";
export const id="dl_3fceab05bf5744fba7d8";
export const url=new URL("../icons/lucid_2-library.svg?v=f44f35a0a9eeb8a787ebed7c130b31fe1aa4cdac5f8cd0a02ea2cec4b33e8de9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
