export const name="caret-circle-right-thin";
export const id="dl_69ca9d7207354c288298";
export const url=new URL("../icons/caret-circle-right-thin.svg?v=d304610dcbcea05dfa97fc810d130c5e9c8ed89376c8a6fc7bbdabc44c6b157a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
