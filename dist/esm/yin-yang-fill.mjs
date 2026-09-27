export const name="yin-yang-fill";
export const id="dl_e4ede4ec051496dcc571";
export const url=new URL("../icons/yin-yang-fill.svg?v=4894acbb39fad5a026776817e9a17fcec49347ead43c6d91e9f2eb07b9554fd8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
