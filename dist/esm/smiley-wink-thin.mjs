export const name="smiley-wink-thin";
export const id="dl_8d9f42fb8b8e0bf47be7";
export const url=new URL("../icons/smiley-wink-thin.svg?v=d2710ebf873060f498c749dc62e374cbd15c0d0ec113f577118ee49efe83a4ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
