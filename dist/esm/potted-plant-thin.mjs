export const name="potted-plant-thin";
export const id="dl_ca70ee650a1c401799ab";
export const url=new URL("../icons/potted-plant-thin.svg?v=9acd7b037c661173b8d6b4d0019fad3eaf062920a37ee1ba535a5ef394682a2f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
