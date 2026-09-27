export const name="escalator_warning-fill";
export const id="dl_83f264250956a3b3a552";
export const url=new URL("../icons/escalator_warning-fill.svg?v=b44a37f469ad86c85ae309ca811c6659a414513f47b5b79fc04881bdae47c6c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
