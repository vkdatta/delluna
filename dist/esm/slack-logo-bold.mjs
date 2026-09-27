export const name="slack-logo-bold";
export const id="dl_5dcc176519bfe8d42d79";
export const url=new URL("../icons/slack-logo-bold.svg?v=48d76d3f51e331c527ea2717120c0a02d9f097999ec69c12c8cd123bf4767e80",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
