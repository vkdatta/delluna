export const name="lucid_1-circle-question-mark";
export const id="dl_3bfb07f7b4cd42818784";
export const url=new URL("../icons/lucid_1-circle-question-mark.svg?v=a15b0270958d04f4f84c8f8ed341b030ffaa4d28ee19259d955247e2cb2c756f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
