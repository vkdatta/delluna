export const name="approval-fill";
export const id="dl_7441570d6612b6ce63b9";
export const url=new URL("../icons/approval-fill.svg?v=606bed6d44273c96b40066acfe7c0389d039217156b54b5028c7880ac2faa907",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
