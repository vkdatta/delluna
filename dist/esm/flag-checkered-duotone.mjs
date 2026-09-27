export const name="flag-checkered-duotone";
export const id="dl_fb0f3070a6a4481c80f0";
export const url=new URL("../icons/flag-checkered-duotone.svg?v=f7138b3299978aa6ace5d99949a60c4e420914802795312ed7789dc4487de3ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
