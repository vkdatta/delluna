export const name="lucid_2-list";
export const id="dl_f492596abb5b45e79e87";
export const url=new URL("../icons/lucid_2-list.svg?v=6abd7b980adde80c5f23c7da7957612bc009b73f8ac3db9d3c6cd2b5986bd140",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
