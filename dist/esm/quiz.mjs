export const name="quiz";
export const id="dl_50663acccf88d4b03f65";
export const url=new URL("../icons/quiz.svg?v=c711502fbc87a8b6ff9577f770a79b89c5ad28b0ec255a164afb5e3f45302f4e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
