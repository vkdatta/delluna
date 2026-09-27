export const name="subwoofer";
export const id="dl_43677d59582462d85c37";
export const url=new URL("../icons/subwoofer.svg?v=0f2a2e76c693aa0f45326663a63d78390ec1c1196d1b1025580c8e00cb3c7166",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
