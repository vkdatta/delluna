export const name="sanitizer";
export const id="dl_669c7103afdc30cef17d";
export const url=new URL("../icons/sanitizer.svg?v=df8a2590bfe873db34ba826821018182aac68c3e18b321a9fc660110dd81a109",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
