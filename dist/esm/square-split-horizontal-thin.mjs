export const name="square-split-horizontal-thin";
export const id="dl_cfe7b670a5ac62bfcdcd";
export const url=new URL("../icons/square-split-horizontal-thin.svg?v=f52c4dd7448691e6256db4717b0cebcfdea9490d596590ef997e6f8ec5b8f39e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
