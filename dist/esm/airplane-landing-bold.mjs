export const name="airplane-landing-bold";
export const id="dl_3c3c0b8ec93f4357b2d1";
export const url=new URL("../icons/airplane-landing-bold.svg?v=77fda587d36f1cd3499fd3259a43513d645eda3c08255f2ea153d07a477c50b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
