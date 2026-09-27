export const name="hurricane-thin";
export const id="dl_ec988d5b6f72463ebfb0";
export const url=new URL("../icons/hurricane-thin.svg?v=777adfb718bc25c7661573894047b65b8708a034104646f527c0ed853999e62a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
