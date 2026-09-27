export const name="lightbulb-thin";
export const id="dl_4595c6a6718b4428b75a";
export const url=new URL("../icons/lightbulb-thin.svg?v=65599518a807203a5a236a996c7d18fd3beb050480607424923e57c35475d15e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
