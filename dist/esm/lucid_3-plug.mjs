export const name="lucid_3-plug";
export const id="dl_f9aa33520b4c45cdaf16";
export const url=new URL("../icons/lucid_3-plug.svg?v=b5278cb55bba5d38591d0235d9206908ff7cc8ced0fb1d1aa875b7dc14a40f21",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
