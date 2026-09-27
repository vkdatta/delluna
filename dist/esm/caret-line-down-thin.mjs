export const name="caret-line-down-thin";
export const id="dl_9b5762d9187b49b6967a";
export const url=new URL("../icons/caret-line-down-thin.svg?v=44fc368df5bceca2b81db7574a1e4b171181a25bf085a61cc2b1338af7c80cba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
