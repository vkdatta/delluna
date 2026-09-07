export const name="folder-open-light";
export const id="dl_43e8cf7b275047db8ad0";
export const url=new URL("../icons/folder-open-light.svg?v=2aa614fd18fe12dc376950bfae276264f1d073942c1eb05224589065a9d5fb4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
