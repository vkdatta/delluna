export const name="video-conference-light";
export const id="dl_75549bf9d1759d65e1e0";
export const url=new URL("../icons/video-conference-light.svg?v=28b692e7f6b580474fb14131f14d2345a5d65dfc06231d97348aa5c85b04f788",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
