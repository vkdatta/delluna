export const name="cinematic_blur-fill";
export const id="dl_2817e1f8f8b7f60c238b";
export const url=new URL("../icons/cinematic_blur-fill.svg?v=5930afa87911fbe4f09b99f147060b3516f433e16172faa48c3e271caaef311c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
