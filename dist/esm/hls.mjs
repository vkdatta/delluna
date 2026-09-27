export const name="hls";
export const id="dl_527b2fd7c87e3661c29a";
export const url=new URL("../icons/hls.svg?v=43167725450f4ff0352a6c16db640f31a0bc0a05400445b3fdc3173c889976ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
