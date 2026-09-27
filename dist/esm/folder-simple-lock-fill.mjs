export const name="folder-simple-lock-fill";
export const id="dl_f23787123dc742cdae05";
export const url=new URL("../icons/folder-simple-lock-fill.svg?v=7d2b22f6dac1139ad92cc97937121bf3be07926401f1029c47b9930ef289156a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
