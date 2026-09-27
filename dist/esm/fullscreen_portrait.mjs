export const name="fullscreen_portrait";
export const id="dl_9824f6d423dbad603102";
export const url=new URL("../icons/fullscreen_portrait.svg?v=9f2f417796b473c1ccc5e3b42a2ef358d3924c00aa4fb046f12c7426b25285b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
