export const name="siren_open-fill";
export const id="dl_9c8e4cad2076415bbb69";
export const url=new URL("../icons/siren_open-fill.svg?v=4dd9c8261dd791f88a8d168c7b0370863b36911085863618b8593290297f0023",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
