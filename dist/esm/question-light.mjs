export const name="question-light";
export const id="dl_a7632a81e3f5454e9580";
export const url=new URL("../icons/question-light.svg?v=c122a1cc393313d1e969e6ae873cf72353198590e50195826a265b65afb38dc0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
