export const name="x-duotone";
export const id="dl_7090ae3c44dd4965990d";
export const url=new URL("../icons/X/x-duotone.svg?v=2092e345cb389e4b3c9795d5aa467b7da4e230dd257ba40845a262c80d51f1ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
