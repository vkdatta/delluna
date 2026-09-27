export const name="pause-thin";
export const id="dl_19a7b81c26ff4c669a5d";
export const url=new URL("../icons/pause-thin.svg?v=ce0cd3f722e00b54eb0bf6113200d20962f9ec6f102ffe1036780e1ce169253e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
