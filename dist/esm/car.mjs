export const name="car";
export const id="dl_8d5db58372514d1992bb";
export const url=new URL("../icons/car.svg?v=394e30a020b4e1dbe4dc789f0161e607142211b4b0f65f97855ec1de4ad2397b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
