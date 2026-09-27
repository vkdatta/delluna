export const name="unfold-horizontal";
export const id="dl_436188aec8c24001b4c1";
export const url=new URL("../icons/unfold-horizontal.svg?v=bdcbfe8c6bfb2dae3782ecba98109fd9db47e9bff24d93bf3b7b685e85cd1315",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
