export const name="beanie-thin";
export const id="dl_c8fa661e3fe5460dbbd2";
export const url=new URL("../icons/beanie-thin.svg?v=526f49ca36b25c90d22a41cb4c3464c1f5d80bfa9daa89505b38ec11a2ba1afd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
