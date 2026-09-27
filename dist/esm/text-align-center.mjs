export const name="text-align-center";
export const id="dl_1c0f0d09c8b645f4aa0c";
export const url=new URL("../icons/text-align-center.svg?v=21893d03310a7c940bd1596bd7f6dc8e11c98465e29617836927ee8d9d786804",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
