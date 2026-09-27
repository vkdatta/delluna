export const name="lego-thin";
export const id="dl_05b5ab00d49b4b9f972b";
export const url=new URL("../icons/lego-thin.svg?v=87b450caee91fe5862df18e39fa325d645152e216b6e3a5877cac66ab5d39a38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
