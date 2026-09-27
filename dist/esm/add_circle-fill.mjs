export const name="add_circle-fill";
export const id="dl_808fb50d4452eda84a20";
export const url=new URL("../icons/add_circle-fill.svg?v=805133c7b60c0efe0e7b30f52f76c28410936ba6e9bd84531f6ae67f36d6e1ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
