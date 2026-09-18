export const name="resume";
export const id="dl_a52199133a8e401caad7";
export const url=new URL("../icons/R/resume.svg?v=c7cfbde7f2fb39bf4d915957222ca5499252043b8abf48fbb4d6affe3ef40fd1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
