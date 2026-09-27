export const name="calculator-thin";
export const id="dl_9c9cbc822ddf42718485";
export const url=new URL("../icons/calculator-thin.svg?v=80d504619aef1beb4dd3e8ef658f862a4b59f67401fd8f94b49b3f2a7b217c24",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
