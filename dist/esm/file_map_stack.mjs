export const name="file_map_stack";
export const id="dl_df435b9308fb4c67bc4c";
export const url=new URL("../icons/file_map_stack.svg?v=953e26d1a874596e5085b08ae9dcd17c52df781d91d68d74917877366a86dae8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
