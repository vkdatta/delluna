export const name="caret-double-up-light";
export const id="dl_06fd1885a54d48cbb40c";
export const url=new URL("../icons/caret-double-up-light.svg?v=0bab1b049cab23fe60de90694761b21dea8b76f5c31999cfa8caa43ad12bb1c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
