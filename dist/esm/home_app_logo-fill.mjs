export const name="home_app_logo-fill";
export const id="dl_fcafcf66c728442e9e1e";
export const url=new URL("../icons/home_app_logo-fill.svg?v=a2455309969b487be879af14fdc938d7f4d1b5c07e2d28c2969031aac4997bf8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
