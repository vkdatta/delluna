export const name="scooter-light";
export const id="dl_e3ad2701396c54890e97";
export const url=new URL("../icons/scooter-light.svg?v=91297988c86742fbe23fb56c9fb7ae26db34b5113efc510cfe8638a38f04a97e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
