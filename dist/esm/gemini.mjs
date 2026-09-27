export const name="gemini";
export const id="dl_6ead07e2998cd66742cf";
export const url=new URL("../icons/gemini.svg?v=32f8580329310568f63e377831ee0e4e39c695b618918d09052e18fadbf96987",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
