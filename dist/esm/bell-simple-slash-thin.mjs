export const name="bell-simple-slash-thin";
export const id="dl_656fd5a4ca5c46a6bc1d";
export const url=new URL("../icons/bell-simple-slash-thin.svg?v=caae1829e081f7d87cc4871c7064d19adb14ab843b8c9d5c1701a419285cb6b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
