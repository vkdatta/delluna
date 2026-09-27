export const name="angular-logo";
export const id="dl_0a903c774f3c46249abb";
export const url=new URL("../icons/angular-logo.svg?v=304c988c25e13fb317a60826e728232da8f575c057880a17313f6d8565402b6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
