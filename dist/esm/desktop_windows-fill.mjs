export const name="desktop_windows-fill";
export const id="dl_6901402b433e4e4385d3";
export const url=new URL("../icons/D/desktop_windows-fill.svg?v=aa36675fef348dbd7a5fc2e0693b5335f59bcd4ed7c542128c31afe071a37ce4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
