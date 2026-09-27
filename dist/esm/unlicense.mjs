export const name="unlicense";
export const id="dl_6ef3f3c127d2e9513a69";
export const url=new URL("../icons/unlicense.svg?v=ada239c1dd56a165475b560edb6bbd2f776b51670d339b416a13aa8786c6dffe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
