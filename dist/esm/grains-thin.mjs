export const name="grains-thin";
export const id="dl_9d1cd5141fdc466ca2ec";
export const url=new URL("../icons/grains-thin.svg?v=9d95eb4871c37447627f6ffa2fdf4b70d9ce11954860af178cae4a9ba137a6ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
