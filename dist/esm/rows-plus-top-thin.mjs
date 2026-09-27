export const name="rows-plus-top-thin";
export const id="dl_4fef5ccaed5b4486b84c";
export const url=new URL("../icons/rows-plus-top-thin.svg?v=88d35845ab9aed74bbbc31b846c3667d482bb73c0d3efaec45876c5963c043b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
