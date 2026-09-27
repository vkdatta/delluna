export const name="speedometer";
export const id="dl_2eade1663ab08f5541d6";
export const url=new URL("../icons/speedometer.svg?v=61e2342abdaf9b63fcca6b6e72834b1e73bf87abf1ad2137a76febb9b1507832",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
