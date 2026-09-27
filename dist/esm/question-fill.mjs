export const name="question-fill";
export const id="dl_a263050be5af4a15bde2";
export const url=new URL("../icons/question-fill.svg?v=ebbeb4c9f53f9c6905b947b3bb4ed61854a112e3fdee70bf128e4fd0fa8a8975",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
