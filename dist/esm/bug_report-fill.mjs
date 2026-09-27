export const name="bug_report-fill";
export const id="dl_c6e69ba23cd4d7c8a032";
export const url=new URL("../icons/bug_report-fill.svg?v=618aadadb82a8064784eb63350d9993bf92faaa0dc59b94cd474a6da44daf317",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
