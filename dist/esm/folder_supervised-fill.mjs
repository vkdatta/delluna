export const name="folder_supervised-fill";
export const id="dl_6806e20c57c31fc84ea5";
export const url=new URL("../icons/folder_supervised-fill.svg?v=7450ed15ca48c4af6d17fd9a597d4c94ab8732ef1e1312efbf11f63f233aa7f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
