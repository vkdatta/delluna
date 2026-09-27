export const name="avocado-light";
export const id="dl_97b43e7b4b984b85b4ab";
export const url=new URL("../icons/avocado-light.svg?v=ceab9c5021bfecdab753cb75e99d03aa3237d6c10a2b5b64c3a3e776e8dcf55b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
