export const name="prompt_suggestion";
export const id="dl_125ff0984692e6cc0a06";
export const url=new URL("../icons/prompt_suggestion.svg?v=5880c504607dff04c7454e704d867cec0e16de7d218d6ce923cdfa7de589cb1e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
