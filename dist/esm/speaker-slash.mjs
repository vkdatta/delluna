export const name="speaker-slash";
export const id="dl_85790696fa6da96a74a2";
export const url=new URL("../icons/speaker-slash.svg?v=998b15756b209efee7c78461bdc61ebd7af5b54706289c319b1eec07be6c284a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
