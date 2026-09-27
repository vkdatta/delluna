export const name="add_location";
export const id="dl_3ce0b499ce659b5f0735";
export const url=new URL("../icons/add_location.svg?v=a3c134eedbe947d9581b2580087555719079458f25fe40d192f07326c0586119",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
