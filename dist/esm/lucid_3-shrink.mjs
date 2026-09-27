export const name="lucid_3-shrink";
export const id="dl_1547d5f02fdf4c438c5b";
export const url=new URL("../icons/lucid_3-shrink.svg?v=9d6481d9f90f0d3b25d66ec4591cfdb09f923eee4af7c2f9c6a51fd3f9cb9020",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
