export const name="windows-logo-fill";
export const id="dl_9247ec0d1bb71ff3f26b";
export const url=new URL("../icons/windows-logo-fill.svg?v=5f0081e514cbaaadf77fee8c7808ba79c5cce76772f5e3cad909a5d8d45a009a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
