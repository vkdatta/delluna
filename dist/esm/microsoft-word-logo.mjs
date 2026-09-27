export const name="microsoft-word-logo";
export const id="dl_9e3bb725418b4ca9849c";
export const url=new URL("../icons/microsoft-word-logo.svg?v=c3c50685920b64ff3b7f768cd1ed4c3435e8d8aba19956b17df4f1440610d8c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
