export const name="question-fill";
export const id="dl_a263050be5af4a15bde2";
export const url=new URL("../icons/question-fill.svg?v=680407d975843eca04b8dbbb11ab53cd2a7ffa563e669d76568ebff3f837dcbe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
