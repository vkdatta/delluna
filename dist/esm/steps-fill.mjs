export const name="steps-fill";
export const id="dl_f65189ea6bae9c59b4c9";
export const url=new URL("../icons/steps-fill.svg?v=b9c26697bdd7f40e2ba1aca3fdadd97b5712ffa8794b1889bd3946997b922a77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
