export const name="smiley-x-eyes-thin";
export const id="dl_5529417f31ba684473cb";
export const url=new URL("../icons/smiley-x-eyes-thin.svg?v=6eafb56ea74ce22257fc0099e7c461d4b5c8a34bf94b2ddaf5e9ba3dd6a7921e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
