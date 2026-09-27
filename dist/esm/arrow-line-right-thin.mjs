export const name="arrow-line-right-thin";
export const id="dl_cb22d40c809e4be3a356";
export const url=new URL("../icons/arrow-line-right-thin.svg?v=47c08442d78e2d4edf137980b8c0a0f5b797373f2ff8057606aaa6f23eee413a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
