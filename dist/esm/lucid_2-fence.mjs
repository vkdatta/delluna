export const name="lucid_2-fence";
export const id="dl_e001a227d3c44f6984ec";
export const url=new URL("../icons/lucid_2-fence.svg?v=197814cb8384e294d2f198936bc8948e5335e9afd5b8c3c1dcf079e272b40633",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
