export const name="auto_stories";
export const id="dl_1c5e3b69477d33d2e9c0";
export const url=new URL("../icons/auto_stories.svg?v=f20573443dc660094bfda53b8f00cd79c90feab075eac612b07ad73a102dfe74",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
