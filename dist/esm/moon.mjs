export const name="moon";
export const id="dl_25d241a1733b4a86802c";
export const url=new URL("../icons/moon.svg?v=5c91f82aea4e7b53305bf29628caebc22a1198ba9fa46c62eef13fb8b3c3f21d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
