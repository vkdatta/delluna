export const name="user-sound-thin";
export const id="dl_6933dc601a3dc3bb4a74";
export const url=new URL("../icons/user-sound-thin.svg?v=7365ce87dab349655e6f4518fd20cfc3c7049b88cb6789049b6a227e78326e6e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
