export const name="planet";
export const id="dl_75299cbe937a43db0a79";
export const url=new URL("../icons/planet.svg?v=9cb1c91a93cc91ce2e19cc36748d3fc8d0db100d515ff4511ce3bd20ed8b2b1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
