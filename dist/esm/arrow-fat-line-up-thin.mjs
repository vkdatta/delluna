export const name="arrow-fat-line-up-thin";
export const id="dl_a5c24fe529674ea29484";
export const url=new URL("../icons/arrow-fat-line-up-thin.svg?v=73cf92b8253bea3250a474fa1d699911e634d5e28bdbb1c1985e6c3e63ceb5fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
