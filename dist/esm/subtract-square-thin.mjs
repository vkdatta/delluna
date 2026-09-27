export const name="subtract-square-thin";
export const id="dl_c37db10e4eb7c174b5bb";
export const url=new URL("../icons/subtract-square-thin.svg?v=54135461cb99fd6df63a41bb669086e5e5d5ab799b5783d2ba8506e3859cc5f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
