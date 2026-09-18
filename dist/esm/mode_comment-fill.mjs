export const name="mode_comment-fill";
export const id="dl_9c06c4f999604ea3a8b4";
export const url=new URL("../icons/mode_comment-fill.svg?v=2745a6ade60c3fc2da84f37160de78ac504142c26b63de3845679898d7f41d1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
