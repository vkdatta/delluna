export const name="ear-thin";
export const id="dl_59d4ab23fa6a445383ff";
export const url=new URL("../icons/ear-thin.svg?v=46dde5bc0470fc1c9b466f1093f01ea577d23a20cb7230fdaa1392b303efef13",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
