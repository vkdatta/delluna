export const name="open_run-fill";
export const id="dl_69f1191d5bcc030ded6f";
export const url=new URL("../icons/open_run-fill.svg?v=4f4597ca1f0133a7b048fc2de11df53829a8f1aaf9e507e62045d85f37e0313d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
