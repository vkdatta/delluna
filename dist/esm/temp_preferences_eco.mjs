export const name="temp_preferences_eco";
export const id="dl_1df6cbc7e3da230cf12b";
export const url=new URL("../icons/temp_preferences_eco.svg?v=2b86c87bb10cf86bf8a4354550edb447929ec037d81516498ba2cb98508b3988",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
