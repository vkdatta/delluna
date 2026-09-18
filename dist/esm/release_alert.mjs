export const name="release_alert";
export const id="dl_1fd8fd7aded242ae9326";
export const url=new URL("../icons/release_alert.svg?v=4140df75406f952b33641918535acd0805b9cec15ebb2859bf137e65c46530df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
