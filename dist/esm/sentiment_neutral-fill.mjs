export const name="sentiment_neutral-fill";
export const id="dl_2b0114338697b9ff10fa";
export const url=new URL("../icons/sentiment_neutral-fill.svg?v=8353ce2fb349b98273467aee371cc96751defc027b316ab6fdea0a362afe32af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
