export const name="record-fill";
export const id="dl_2a8146090d7b4c0988e7";
export const url=new URL("../icons/record-fill.svg?v=4126df9254dc4f4f26d7fb1fbc77dea5b4c55cdea6e68aa878c9840a411ca49f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
