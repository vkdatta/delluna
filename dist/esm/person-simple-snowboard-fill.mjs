export const name="person-simple-snowboard-fill";
export const id="dl_42970ed39dbf492192d0";
export const url=new URL("../icons/person-simple-snowboard-fill.svg?v=eec9c0d095bbf2b4055e38b20a4de1e759b3deb132aaff5f7140b47565cd9bd1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
